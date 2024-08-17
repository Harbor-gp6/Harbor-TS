/* eslint-disable react/prop-types */
import { Typography } from '../../Typography/Typography'

export function FooterLinks({ linkTitle, linkPaths }) {
  return (
    <div className='flex flex-col gap-6'>
      <Typography
        textPosition="left"
        color='blue'
      >
        {linkTitle}
      </Typography>

      <div className='flex flex-col gap-4'>
        {linkPaths.map((path, index) => (
          <a href={path.ref} key={index}>
            <Typography
              color="black"
              textPosition="left"
              textSize="base"
            >
              {path.title}
            </Typography>
          </a>
        ))}
      </div>
    </div>
  )
}
