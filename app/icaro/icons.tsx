'use client'
import { Slide, VStack, Image, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function FloatingIcons() {
    return (
        <>
            <Slide direction='left' in style={{top: '150px', pointerEvents: 'none'}}>
                <VStack spacing={8} w='100%' maxW='lg' alignItems='flex-start' pl={4} mx='auto'>
                    <Box pointerEvents='all'>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            animate={{ rotate: [0, 360], transition: { duration: 4, repeat: Infinity, ease: 'linear' } }}
                        >
                            <Image w='50px' src='/icons/github.svg' />
                        </motion.div>
                    </Box>
                    <Box pointerEvents='all' ml='30px'>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            animate={{ rotate: [360, 0], transition: { duration: 3, repeat: Infinity, ease: 'linear' } }}
                        >
                            <Image w='50px' src='/icons/upwork.svg' />
                        </motion.div>
                    </Box>
                    <Box pointerEvents='all' ml='10px'>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            animate={{ rotate: [0, 360], transition: { duration: 6, repeat: Infinity, ease: 'linear' } }}
                        >
                            <Image w='50px' src='/icons/next-js.svg' />
                        </motion.div>
                    </Box>
                </VStack>
            </Slide>
            <Slide direction='right' in style={{top: '150px', right: 0, pointerEvents: 'none'}}>
                <VStack spacing={8} w='100%' maxW='lg' alignItems='flex-end' pr={2} mx='auto'>
                    <Box pointerEvents='all' mr='26px' mt='60px'>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            animate={{ rotate: [0, 360], transition: { duration: 2, repeat: Infinity, ease: 'linear' } }}
                        >
                            <Image w='50px' src='/icons/chakra-ui.svg' />
                        </motion.div>
                    </Box>
                    <Box pointerEvents='all' mt={2} mr='10px'>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            animate={{ rotate: [0, 360], transition: { duration: 5, repeat: Infinity, ease: 'linear' } }}
                        >
                            <Image w='50px' src='/icons/react.svg' />
                        </motion.div>
                    </Box>
                </VStack>
            </Slide>

        </>
    )
}
