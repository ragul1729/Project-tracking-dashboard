package com.PTD.exception; // ⚠️ Make sure this package path matches your folder structure!

import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice // 💡 Tells Spring Boot to intercept errors across ALL controllers
public class GlobalDebugExceptionHandler {

    // Catch Jackson mapping errors (like 'undefined' string crashes)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<String> handleJsonParseException(HttpMessageNotReadableException ex) {
        System.err.println("\n❌ === JACKSON JSON PARSE CRASH DETAILS ===");
        System.err.println("Reason: " + ex.getMostSpecificCause().getMessage());
        ex.printStackTrace(); // Prints the full stack trace to your terminal
        System.err.println("===========================================\n");

        return ResponseEntity.badRequest()
                .body("JSON Mapping Error: " + ex.getMostSpecificCause().getMessage());
    }

    // Catch Validation errors (like missing fields marked with @Valid or @NotNull)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<String> handleValidationException(MethodArgumentNotValidException ex) {
        System.err.println("\n❌ === HIBERNATE VALIDATION CRASH DETAILS ===");
        ex.getBindingResult().getFieldErrors().forEach(error -> {
            System.err.println("Field '" + error.getField() + "' failed. Error: " + error.getDefaultMessage());
        });
        System.err.println("=============================================\n");

        return ResponseEntity.badRequest()
                .body("Validation Error: " + ex.getBindingResult().getFieldError().getDefaultMessage());
    }
}
