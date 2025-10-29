import { StringInputProps, set } from 'sanity'
import { Stack, Button } from '@sanity/ui'

export function BioInput(props: StringInputProps) {
  const { value, onChange } = props

  const handleGenerate = () => {
    onChange(set('Student journalist at Laney College'))
  }

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Button text="Generate" onClick={handleGenerate} />
    </Stack>
  )
}