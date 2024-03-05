import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import aus from "../assets/aus.png";

const SinglePageFAQ = () => {
    return (
        <div>

            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton >
                            <Box flex='1' textAlign='left'>
                                PRODUCT INFO
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Enjoy the Quiet. Conquer the Tough.
                    <p>
                    The tyres are equipped with Durawall technology provides superior off road durability, stability with improved quiet and comfort for on road and extended mileage, achieving the best balance between on and off road.
                    </p>
                    <p>
                    ACTIVEGRIP TECHNOLOGY With formulated ActiveGrip compound to deliver grip protection for shorter wet braking performance
                    </p>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Available Sizes
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <li>175/65R15 - Honda City IVTEC, Honda City, Honda Jazz, Maruti Suzuki Ignis, Honda Amaze, Hyundai Exter</li>
                        <li>185/60R15 - VW Polo, VW Vento, Tata Zest, Toyota Etios Cross, Skoda Rapid, VW Ameo, Toyota Etios Liva</li>
                        <li>195/55R16 - Hyundai Verna, Maruti Suzuki Baleno, Maruti Suzuki Ciaz, Hyundai i20 Active, Hyundai Elite i20</li>
                        <li>205/60R16 - Ford Ecosport, Maruti Suzuki S-Cross, Renault Fluence, Vitara Breeza, Maruti SX4, Skoda Kushaq</li>


                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Features and Benefits
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    <p className='title text-xl'>ACTIVEGRIP TECHNOLOGY </p>
                    <p>With formulated ActiveGrip compound to deliver grip protection for shorter wet braking performance.</p><br></br>
                    <p className='title text-xl'>DURAGUARD TECHNOLOGY </p>
                    <p>Designed with DuraGuard Technology with 2 ply constructions to enhance impact protection against cuts and punctures</p>

                    </AccordionPanel>
                </AccordionItem>


                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                BRAND VALUES
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <img src={aus} />
                    </AccordionPanel>
                </AccordionItem>


            </Accordion>
        </div>
    )
}

export default SinglePageFAQ