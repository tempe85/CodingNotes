<small>[Return Home](../../README.md)</small> | <small>[Return to CS 372](index.md)</small>

## Traceroute

- command line utility
- Finds the exact path a data packet takes when moving from a sender (client) to destination.

<img src="./../../images/tracerouteexample.PNG">

- 3 data packets sent out, the RTT for each router in the path to the destination is calculated.
  - Gives router IP and RTT in ms
  - Shows the number of hops it took to get to the destination (number of routers it passed through)
  - The final destination in a traceroute should be roughly the same time it takes to do a ping
  - "\* \* \*" can mean the router is working fine but the router is not configured to return traceroute datapackets

### TTL

- Time to live
- TTL is sent to 30 at the start
  - Prevents a data packet from traveling endlessly around the internet (can get caught in an endless loop)

### ICMP (Internet control message protocol)

- Error-reporting protocol
- Generates error messages to the source IP address whenever IP packets have failed to be delivered due to network problems

**How it works**

- Sends a sequence of UDP ICMP Echo request packets to a destination host with a specified TTL value.
- When the packet reaches a gateway, the gateway checks if the TTL of a packet is greater than one, reduces the TTL of the packet by 1 and tramsits to packet to the next hop.
  - If the TTL is 1, then the gateway discards the packet and sends backa Time Exceeded response to the source information the destination host could not be reached as the packet TTL has exceeded.
    - The time exceeded reponses are used by the source client to determine the intermediate gateway sitting between the source and destination system by manipulating the TTL packets on each iteration until we reach our destination host or max number of iterations (hops limit) has been reached.

<img src="./../../images/icmppacket.PNG">
