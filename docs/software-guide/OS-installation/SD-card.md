---
sidebar_position: 3
---

# Установка ОС на SD

1. Перевести устройство в Recovery mode:
<figure align="center">
![recovery mode](/img/sd_installation_1.png)
<figcaption align="center">caption here</figcaption>
</figure>
2. Через RKDevTool затереть EMMC;
3. Зашить образ PixelNAS OS на SD карту, например командой ```sudo dd if=pixelnas_os.img of=/dev/sda bs=1M status=progress```;
4. Вставить SD карту в PixelNAS и запустить.
5. Произвести первоначальную настройку, в соответствии с руководством от Armbian.
