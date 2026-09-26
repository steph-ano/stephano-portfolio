package com.stephano.portfolio.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stephano.portfolio.model.CvDataDto;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.InputStream;

@Service
public class CvService {

    private static final Logger logger = LoggerFactory.getLogger(CvService.class);

    private final ObjectMapper objectMapper;
    private CvDataDto cvData;

    public CvService(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @PostConstruct
    public void init() {
        loadCvData();
    }

    private synchronized void loadCvData() {
        try {
            ClassPathResource resource = new ClassPathResource("cv-data.json");
            try (InputStream is = resource.getInputStream()) {
                this.cvData = objectMapper.readValue(is, CvDataDto.class);
                logger.info("Successfully loaded cv-data.json for {}", cvData.getPersonal().getName());
            }
        } catch (Exception e) {
            logger.error("Error reading cv-data.json: {}", e.getMessage(), e);
            this.cvData = new CvDataDto();
        }
    }

    @Cacheable("cv")
    public CvDataDto getCvData() {
        if (this.cvData == null) {
            loadCvData();
        }
        return this.cvData;
    }
}
