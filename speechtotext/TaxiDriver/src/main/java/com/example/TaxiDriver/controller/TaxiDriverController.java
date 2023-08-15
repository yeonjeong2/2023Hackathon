package com.example.TaxiDriver.controller;

import com.example.TaxiDriver.dto.TaxiDriverDto;
import com.example.TaxiDriver.entity.TaxiDriverEntity;
import com.example.TaxiDriver.service.TaxiDriverService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class TaxiDriverController {
    private final TaxiDriverService taxiDriverService;

    @GetMapping("/")
    public String home(){
        return "TaxiDriver.html";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute TaxiDriverDto taxiDriverDto, Model model){
        TaxiDriverEntity taxiDriver = taxiDriverService.login(taxiDriverDto);
        if (taxiDriver==null) return "redirect:/";
        else {
            model.addAttribute("taxiDriver",taxiDriver);
            return "wait.html";
        }
    }

}

