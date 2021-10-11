`Modems` connect end systems to edge routers via access network media

- Gateway to internet core
  - Cable, legacy, wireless

`Internet structure: network of networks`

- Tier 1
- Regional ISP
- Access ISP

`Network performance metrics`

- Throughput
  - Rate (bits/sec) rate at which bits are being transfered from sender rceivier)
- End-to-end delay (nodal delay)
  - Total time it takes to go from sender to receiver

### 4 sources of packet delay

1. Nodal processing
   - Check bit errors
   - Determine output link
2. Queuing delay
   - Time waiting at output link for transmission
3. Transmission delay
   - R = link bandwidth
   - L = Packet length
   - Delay is = L / R
4. Propagation delay
   - Time for bits tor propogate through the media
   - d = length of physical link
   - s = speed of light
   - Delay is d/s

Nodal delay = dnodal + dproc + dqueue + dtrans + d prop

`Packet switching: Store and forward`

- It takes L/R seconds to transmit packe of L bits to link at R bps
- If transmitted 3 times it will be 3\* L/R

### Packet loss

- Queue (buffer) has finite capactiy
- If packet arrives at a full queue it is dropped
- Lost packet may be retransmitted by previous node (maybe not)
