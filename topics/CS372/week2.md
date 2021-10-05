| Keyword                            | Definition                                                                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Multiplexing with physical media` | Merging multiple communication streams onto the same medium                                                                                                     |
| `ISO`                              | Multinational dedicated to the agreement of standards worldwide                                                                                                 |
| `OSI`                              | Model which purpose is to show how to facilitate communication between different systems without requiring changes to logic of underlying hardware and software |

### Access Networks

#### Home

- Router
  - Can contain
    - NAT
    - Firewall
- WAP (wireless access point)
- Modem

#### LAN - Local Area Network

- Likely multiple switches and routers
- Servers

#### Wireless

- Wireless LAN

  - Within building (100ft)
  - 802.11 b/g WiFi: 11 or 54 Mbps transmission rate

- Wide-are wireless access
  - Phone company
    - 10-30 km
  - 1 to 10 Mbps transmission rate
  - 3G, 4G, LTE

### Physical media

- Guided media
  - Solid, wireless
  - Twisted pair copper wire
    - CAT 6 1Gbps, 10 Gbps Ethernet
    - Still used for high-speed LAN
    - Connectors
      - RJ-45
      - If connector is same on both ends then used with hub/switches
  - Coaxial cable
    - Two concentric copper conductors
    - Broadband
      - HFC (hybrid fiber-coax cable)
    - Baseband
      - Single channel on cable
      - Uses small part of spectrum
    - Less interference than twisted pair due to shielding
- Unguided
  - Wireless

#### Frequency division multiplexing (FDM)

- Achieves multiplexing by using different carrier frequencies

#### Guided media: Fiber optic cable

- Glass fiber carrying light pulses
- High-speed, up to 100's Gbps
- Low error rate
  - Immune to electromagnetic noise and other interference
- Wave-length division multiplexing
  - Receiver separates frequencies using a prism (red, orange, ect)

### Unguided Media

- Wireless
- Terrestrial microwave
- Wifi
- Wide-area (WAN)
  - Cellular
- Satellite

## Protocols and Layering

- The layered model allows us to have plug in modules that are designed to solve specific problems at different system levels

#### Layers

- Each layer implements a service
  - Own internal-layer actions
  - Relies on services provided by layers above/below

`Internet protocol stack`

- Application layer
  - FTP, SMTP, HTTP
- Transport layer
  - process-process data transfer
  - TCP, UDP
- Network layer
  - Routing of datagrams from source to destination
  - IP, routing protocols
- Link Layer
  - node to data transfer
  - PPP, Ethernet
- Physical layer
  - Carries actual signal between devices
  - Cable, wireless

<img src="./../../images/internetlayers.PNG">
* Each layer at the source adds a new header
* Switch may do some error checking at the link layer
* Router
  * Looks at IP address of the message in the header and sends it to destination
* At destination moves it up the layers

### Constraints

1. Software for each layer depends only on the services of the software provided by the neighboring layer (`well-defined interfaces`)
2. The software at leayer `n` at the destination receives exactly the same protocol messager sent by layer `n` at the sender (`consistency`)

- These constraints mean the protocls within a protocol stack can be
  - Test independently
  - Modified/replaced independently

### ISO/OSI reference model

- Application layer
- Presentation layer
  - Allows apps to interpret meaning of data, e.g. encryption, compression
- Session layer
  - Synchronization checkpointing, recovery of data exchange
- Transport layer
- Network layer
- Link layer
- Physical layer

The internet stack 'missing' these layers (presentation, session layer)

- These services, if needed, must be implemented in the application layer of the internet protocol stack
- An example is a browser keeping a session cookie

## <u>Network Security</u>

`Worm`- Attacks network core. Installs itself, replicates and sends itself around the internet
`Malware`- Virus/worm that will try to corrupt or replace running code on the computer
`Botnet`- Group of virus-infected computers acting in concert to achieve a task (DDoS, spam)
`Destributed Denial of Service`- Botnet or other large group of hosts carrying out a Denial of Service attack
`Spyware`- Type of malware that infects your comptuer and attempts to capture data, e.g. passwords/keystrokes, and sends them back to the attacker
`Packet-sniffing`- Snoops packets on the internet
`IP Spoofing`- Sends packet with false source address

- Field of network security is about:
  - How networks can be attacked intentionally and unintentionally
  - How to defend networks
  - How to design architectures that are immune to attacks
