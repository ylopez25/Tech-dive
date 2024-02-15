import { FormLabel, Select, Input, FormHelperText } from "@chakra-ui/react"

export const FormTextComp = ({ label, form_input, type, helper, margin, ...rest }) => {
    return (
        <>
            <FormLabel
                marginTop="5"
                marginLeft="8"
            >
                {label}
            </FormLabel>
            <Input
                value={form_input}
                border="1px solid black"
                width="80"
                type={type}
            />
            <FormHelperText
                marginRight={margin}
            >
                {helper}
            </FormHelperText>
        </>
    )
}

export const FormSelectComp = ({ label, placeholder, data, ...rest }) => {
    return (
        <>
            <FormLabel
                marginTop="5"
                marginLeft="8"
            >
                {label}
            </FormLabel>
            <Select
                marginLeft="8"
                placeholder={placeholder}
                border="1px solid black"
                width="80"
            >
                {data.map(
                    (element) =>
                        element && (
                            <option
                                key={element}
                            >{element}</option>
                        )
                )}
            </Select>
        </>
    )

}
