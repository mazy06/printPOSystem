package io.mazy.printposystem.controller;

import io.mazy.printposystem.service.PrinterService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.print.PrintException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Map;

@RestController
public class PrintController {

    private final PrinterService printService;

    @Autowired
    public PrintController(PrinterService printService) {
        this.printService = printService;
    }

    private static final String ALLOWED_DDNS_HOSTNAME = "printposystem.ddns.net";

    @PostMapping("/print")
    public String printTicket(@RequestBody Map<String, String> request, HttpServletRequest httpRequest) throws Exception {
        String ticketContent = request.get("content");

        String clientIP = httpRequest.getRemoteAddr();

        try {
            // Résoudre l'adresse IP du nom de domaine dynamique
            InetAddress allowedIP = InetAddress.getByName(ALLOWED_DDNS_HOSTNAME);

            if (clientIP.equals(allowedIP.getHostAddress())) {
                try {
                    printService.print(ticketContent);
                    return "Ticket envoyé à l'imprimante";
                } catch (PrintException e) {
                    return "Erreur lors de l'envoi du ticket : " + e.getMessage();
                }
            } else {
                return "Accès refusé";
            }
        } catch (UnknownHostException e) {
            return "Erreur de résolution de l'adresse IP";
        }
    }
}
