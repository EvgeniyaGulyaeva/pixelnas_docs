---
sidebar_position: 2
---

# Установка ОС на EMMC из Linux

Текущий релиз не поддерживает нативную установку с помощью RKDevTool, так что установка производится по усложнённому алгоритму, который включает в себя полную разборку PixelNAS. В будущих релизах это будет исправлено.

Для установки нам потребуется:

* USB A-A кабель;
* Проводящий пинцет или хотя бы скрепка;
* Загрузчик MiniLoaderAll.bin;
* rkdeveloptool (можно скачать тут);
* Образ PixelNAS OS, который можно скачать тут;
* ПК с Linux.

Для установки необходимо выполнить следующие шаги:

1. Замкнуть GND и D0 и включить PixelNAS:
<figure align="center">
![GDN-D0](/img/linux_installation_1.png)
<figcaption align="center">caption here</figcaption>
</figure>

2. Подключить PixelNAS через OTG порт к ПК:
<figure>
![OTG connection](/img/linux_installation_2.png)
<figcaption align="center">caption here</figcaption>
</figure>

3. Выполнить команду ```rkdeveloptool ld``` что бы убедиться, что устройство доступно.
4. Замкнуть D0 и GND с другой стороны устройства:
<figure align="center">
![D0-GND](/img/linux_installation_3.png)
<figcaption align="center">caption here</figcaption>
</figure>

5. Загрузить Miniloader на устройство командой ```rkdeveloptool db MiniLoaderAll.bin```;
6. Проверить, какая память выбрана для прошивки: ```rkdeveloptool rfi```. Должно быть что то вроде:

```
Flash Info:
Manufacturer: SAMSUNG, value=00Flash
Size: 59648 MB
FlashSize: 122159104 Sectors
Block Size: 512 KB
Page Size: 2 KB
ECC Bits: 0
Access Time: 40
Flash CS: Flash<0>
```

:::note
Если выбрано устройство на 16МБ – необходимо повторить шаги 1-6 ещё раз.
:::

1. Затереть EMMC: ```rkdeveloptool ef```.
2. Зашить образ прошивки: ```rkdeveloptool wl 0 image.img```.
3. Перезапустить устройство.