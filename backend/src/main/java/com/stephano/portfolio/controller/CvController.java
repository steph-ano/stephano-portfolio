package com.stephano.portfolio.controller;

import com.stephano.portfolio.model.CvDataDto;
import com.stephano.portfolio.service.CvService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class CvController {

    private final CvService cvService;

    public CvController(CvService cvService) {
        this.cvService = cvService;
    }

    @GetMapping("/cv")
    public ResponseEntity<CvDataDto> getCv() {
        return ResponseEntity.ok(cvService.getCvData());
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "app", "Stephano Valdivia Portfolio API",
                "version", "1.0.0",
                "identity", "Software Engineering + Sonic Art Architecture"
        ));
    }
}
