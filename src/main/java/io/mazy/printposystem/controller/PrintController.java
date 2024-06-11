package io.mazy.printposystem.controller;

import io.mazy.printposystem.service.PrinterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.print.PrintException;
import java.util.Map;

@RestController
public class PrintController {

    private final PrinterService printService;

    @Autowired
    public PrintController(PrinterService printService) {
        this.printService = printService;
    }

    @PostMapping("/print")
    public String printTicket(@RequestBody Map<String, String> request) throws Exception {
        String ticketContent = request.get("content");
        // Appeler le service d'impression
        try {
            printService.print(ticketContent);
            return "Ticket envoyé à l'imprimante";
        } catch (PrintException e) {
            return e.getMessage();
            //return STR."Erreur lors de l'envoi du ticket : \{e.getMessage()}";
        }
    }
}
