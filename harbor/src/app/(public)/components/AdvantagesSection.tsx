import { Heading } from '../../../components/Heading/Heading'
import { Container } from '@mui/material'
import advantagesInfos from '../../../assets/advantagesInfos.json'
import { Typography } from '../../../components/Typography/Typography'


export default function AdvantagesSection() {
  return (
    <div className='w-screen flex items-center my-20 justify-center bg-white py-6'>
      <Container maxWidth="lg" >
        <div className='w-full flex flex-col gap-14 items-center justify-center'>
          <Heading
            color="black"
            className="text-center"
            size={3}
          >
            Acreditamos na transformação financeira para prestadores de serviço.
          </Heading>

          <div className='flex flex-col lg:flex-row gap-4 w-full h-full items-center justify-center'>
            {advantagesInfos.map((advantage, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-2 w-72 p-4 ${advantage.hasBorder ? 'border-b lg:border-r lg:border-b-0 border-black' : 'border-none'}`}
              >
                <Heading
                  color="black"
                >
                  {advantage.advantageValue}
                </Heading>

                <Typography
                  color="black"
                  className="whitespace-nowrap"
                >
                  {advantage.advantageDescription}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
