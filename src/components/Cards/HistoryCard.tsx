import React from 'react'
import { Heading, HStack, Text, VStack } from 'native-base'
import { HistoryDTO } from '@dtos/HistoryDTO'

type HistoryCardProps = {
  data: HistoryDTO
}
export function HistoryCard({ data }: HistoryCardProps) {
  return (
    <HStack
      w={'full'}
      paddingX={5}
      paddingY={4}
      marginBottom={3}
      bgColor={'gray.600'}
      rounded={'md'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <VStack marginRight={5} flex={1}>
        <Heading color={'white'} fontSize={'md'} textTransform={'capitalize'}>
          {data.group}
        </Heading>
        <Text color={'gray.100'} fontSize={'lg'} numberOfLines={1}>
          {data.name}
        </Text>
      </VStack>
      <Text color={'gray.300'} fontSize={'md'}>
        {data.hour}
      </Text>
    </HStack>
  )
}
