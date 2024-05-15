---
sidebar_position: 5
---

# NCM (Ethernet) Gadget

Данный пункт позволит работать с PixelNAS как с устройством в сети, просто подключив его по USB к ПК. 

Для настройки потребуется пакет конфигурационных файлов, который можно скачать тут.

Далее:

1. .service кладём в /etc/systemd/system, .network в /etc/systemd/network, скрипт usb-gadget в /usr/sbin и даём ему право на выполнение ```chmod +x/usr/sbin/usb-gadget```
2. Активируем systemd сервис: ```sudo systemctl daemon-reload && sudo systemctl enable usb-gadget```.
3. Включаем network manager: ```sudo systemctl enable systemd-networkd```.
4. Устанавливаем dnsmasq: ```apt install dnsmasq```.
5. Файл usb0.conf кладём в /etc/dnsmasq.d.
6. Запускаем dns сервер: ```systemctl enable dnsmasq && systemctl start dnsmasq```.