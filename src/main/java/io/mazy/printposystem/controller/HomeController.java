package io.mazy.printposystem.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.Socket;

@Controller
public class HomeController {
    @GetMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/healthcheck")
    public ResponseEntity<String> testConnection() {
        String ip = "192.168.1.13";
        int port = 9100;
        try (Socket socket = new Socket()) {
            socket.connect(new InetSocketAddress(ip, port), 5000);
            return ResponseEntity.ok("Connection successful to " + ip + " on port " + port);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Connection failed to " + ip + " on port " + port + ": " + e.getMessage());
        }
    }
}

