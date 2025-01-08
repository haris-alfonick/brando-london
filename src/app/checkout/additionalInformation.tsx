import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const AdditionalInformation = () => {
  return(
    <>
      <div className='grid grid-cols-12 gap-x-5 gap-y-5 p-6 border rounded-xl [&_h3]:text-[#333333] [&_h3]:text-xl [&_h3]:font-medium [&>div>label]:block [&>div>label]:text-[#333333] [&>div>label]:mb-2.5'>
        <h3 className='col-span-12'>Additional Information</h3>
        <div className='col-span-12'>
          <Label htmlFor='name'>
            Order Notes{' '}
            <span className='text-gray-400'>(Optional)</span>{' '}
          </Label>
          <Textarea
            placeholder='Type your message here.'
            id='message'
          />
        </div>
      </div>
    </>
  )
}

export default AdditionalInformation