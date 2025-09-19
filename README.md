---
title: "Maker Portfolio"
permalink: "/about/"
layout: page
---

## Introduction

Hello! Welcome to my maker portfolio.  
<img src="{{ site.baseurl }}/assets/images/20250307_213647.jpg" alt="QA Approved" width="300">
<img src="/assets/images/20250307_213647.jpg" alt="QA Approved" width="300">
![](/assets/images/20250307_213647.jpg){: width="300"}
Ever since I was a kid, I’ve been fascinated by how things worked—especially **electronics and robotics**. My journey began in **Grade 6**, when I joined my school’s electronics lab and started experimenting with simple circuits. That curiosity quickly grew into building robots and competing in national and international competitions.

## Early Robotics: Lego Differential Drives
My first real exposure to robotics came through **Lego-based differential drive robots**, which I built and competed with in the **RoboCup Rescue Line competition in India**.

![Lego Robot Early Version](path/to/image1.jpg)

### First Iterations
The initial robot was simple:  
- An on/off switch with **two light sensors** to follow a line.  

### Competition Requirements
The task expected us to design a robot that could:  
- Follow a black line on a white surface.  
- Avoid obstacles and climb ramps.  
- Navigate hurdles.  
- Rescue victims (plastic balls) and deposit them in the designated zone.  

![Competition Course](path/to/image2.jpg)

### Progression
Over time, I learned about **control loops** and applied **PID controllers** to make the robot more reliable.  
- Our final Lego robot placed **2nd nationally**.  
- We received the **Best Technical Skills Award**.  
- We qualified for the **Asia-Pacific RoboCup in Moscow**.  

![National Competition](path/to/image3.jpg)


## Transition to Open Source: Arduino Robots
By **Grade 11**, we realized Lego systems were limiting. We transitioned to **Arduino-based designs** with custom electronics and mechanics.

![Arduino Robot](path/to/image4.jpg)

### Design Highlights
- **3D-printed chassis** with a 4-wheeled differential drive.  
- **PID control** for smooth and precise line following.  
- **7 IR sensors** to detect line position.  
- **Color sensors** to identify green rescue markers.  
- **Ultrasonic sensors** for obstacle and hurdle detection.  
- **Dual microcontrollers**: Arduino Mega (main logic) + Arduino Nano (sensor handling).  
- Retained **Lego motors** for the lifting mechanism due to their torque.  

### Rescue System
We designed a **basket with tactile switches** that:  
- Detected when the robot entered the rescue zone.  
- Controlled motor rotations to drop victims with precision.  

![Workspace](path/to/image5.jpg)


## High School Combat Robotics
In addition to rescue robots, I also explored **combat robotics** during high school.  

![Combat Robot 1](path/to/robot1.jpg)
![Combat Robot 2](path/to/robot2.jpg)

### Achievements
- Designed and built wedge-based combat robots.  
- Won multiple **high school and university-level competitions**.  
- Secured **1st place at Technoxian**, one of India’s biggest war robotics competitions.

## Other projects (high school)
wood working speaker cabinets (my first attempt at working with wood (mdf))

other arduino based projects: home automation (relay/ble based) 3*3*3 led matrix 

university life:

More recently I have deweled deeper into embedded electronics and working with stm32 nucleo boards in my spare time 
designing pcbs for the electrical team 
Designing a **CAN bus network** with STM32 microcontrollers to coordinate subsystems.  
  - Subsystems include **drive**, **braking**, **lights**, **relays**, and **communications**.
(images of the subsystem boards)
these boards are designed as an expansion to the nucleo boards
work can be seen using this link (repo)
here are some of the stm32 drivers written from sractch(in progress, link)
(images)
utilized  raspberry pi as the onboard computer which would recieve commands from LoRa 
base station also utlizes a raspberrpi running a qt based GUI
(images)
what i am working on now
working on interfacing a newly acquired PMSM motor with our current systems
electromagnetic braking systems
(images)





