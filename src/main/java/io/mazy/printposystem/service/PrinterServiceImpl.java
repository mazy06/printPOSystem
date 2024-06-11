package io.mazy.printposystem.service;

import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.Socket;
import java.net.SocketAddress;
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

@Service
public class PrinterServiceImpl implements PrinterService {
    @Override
    public void print(String ticketContent) throws Exception {

        // Génération du contenu du ticket
        StringBuilder content = new StringBuilder();
        Date dt = new Date();
        DateFormat dateFormat;
        dateFormat = DateFormat.getDateInstance(DateFormat.MEDIUM, Locale.FRENCH);

        content.append("----------------------------------------\n")
                .append("            #######################            \n")
                .append("                 FOOD COMPTOIR               \n")
                .append("            #######################            \n")
                .append("----------------------------------------\n\n\n")
                .append("Date: ").append(dateFormat.format(dt)).append("\n")
                .append("----------------------------------------\n")
                .append(ticketContent).append("\n")
                .append("----------------------------------------\n");

        content.append("----------------------------------------\n")
                .append("----------------------------------------\n")
                .append("        Merci de votre visite !        \n")
                .append("----------------------------------------\n");

        // Commande ESC/POS pour découper le papier
        byte[] cutCommand = new byte[]{0x1D, 'V', 1}; // Utilisez les commandes appropriées pour votre imprimante
        //byte[] cutCommand = new byte[]{0x1D, 'V', 0};
        //byte[] cutCommand = new byte[]{0x1B, 'i'};


        String printerIP = "192.168.1.13";
        int printerPort = 9100;

        Socket socket = new Socket();
        SocketAddress socketAddress = new InetSocketAddress(printerIP, printerPort);
        socket.connect(socketAddress, 1000); // 10 secondes de délai de connexion
        socket.setSoTimeout(2000); // 20 secondes de délai de lecture

        // Écriture sur le flux de sortie
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write(content.toString().getBytes());
        outputStream.write(cutCommand); // Envoi de la commande de découpe
        outputStream.flush();

        // Fermeture des flux et de la socket
        outputStream.close();
        socket.close();
    }
}



