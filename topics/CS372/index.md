<small>[Return Home](../../README.md)</small>

# CS 372 Intro to Networking

- [Week 1](week1.md)
- [Week 2](week2.md)
- [Week 3](week3.md)
- [Week 4](week4.md)
- [Week 5](week5.md)
- [Week 6](week6.md)
- [Week 7](week7.md)
- [Week 8](week8.md)
- [Week 9](week9.md)
- [Week 10](week10.md)

- [Traceroute](traceroute.md)

### Very complex

- Many standards needing to communicate with each other

| Keyword          | Definition                                                                                                                                           |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Network`        | System for connecting computers using a `single transmission technology`                                                                             |
| `Internet`       | Set of networks connected by routers that are configured to communicate among a `variety of network transmission technologies` (Network of networks) |
| `Ethernet`       | Networking standard                                                                                                                                  |
| `TCP/IP`         | Protocol made internetworking possible. Transmission control protocol / Internet protocol                                                            |
| `Network edge`   | Commononly used devices that access the internet (or other network), clients and servers, hosts and applications                                     |
| `Network core`   | Routers and switches. Network of networks                                                                                                            |
| `Physical media` | Communication links for connecting network core and edge. Copper wire, optical fiber, wireless and more.                                             |

`Packet switches` - Chunks of data sent by routers

`Speed` - Measure in electronic units

- K = 10^3
- M = 10^6
- G = 10^9
- E.g. network speed of 8Mbps means 8,000,000 bits per second

`Size` bits, bytes measured in binary units

- Ki = 2^10, M = 2^20, G = 2^30
- E.g. disk size of 200GiB means 200 x 20^30 Bytes = 214.... Bytes

- Bytes and bits
  - Use lower case `b` for bits
  - Upper case `B` for Bytes
  - Example: 1 Mib = 128 KiB

### Protocols

A `protocol` defines two things:

1. format and order of messages sent and received among network entities
2. actions taken on message transmission and receipt

- Allows network entities to talk to each other in a defined manner.

### Network Edge

- Client/server model
- Hosts
- P2P (peer-to-peer)

`Connection-oriented service`:

- Goal is to transfer data between end systems
- TCP (transmission control protocol)
  - Internet's connection oriented serice
  - handshake - prepare for transfer
  - reliable, in order byte stream data transfer
  - flow control (sender won't overhelm receiver)
  - congesion control
    - Senders slow sending rate when network is congested
  - Applications that use TCP:
    - HTTP (Web)
    - FTP (file transfer)
    - Telnet (remote login)
    - SMTP (email)

`Connectionless service`:

- Goal is to transfer data between end systems (same as connection-oriented)
- UDP (user data protocol)
  - Internet's connecitonless service
  - light-weight/fast
  - no handshake
  - unreliable data transfer (fire and forget)
  - no flow control
  - no congestion control
  - Applications that use UDP:
    - streaming media
    - Teleconferencing
    - DNS (domain name service)
      - Lookup internet addresses
    - Internet telephony
