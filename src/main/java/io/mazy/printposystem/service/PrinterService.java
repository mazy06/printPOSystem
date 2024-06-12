package io.mazy.printposystem.service;

public interface PrinterService {

    void print(String ticketContent) throws Exception;

    String getAdressIp();
}