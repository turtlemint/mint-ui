// four_wheeler_details
const buildUI = (config) => { 
    if(config.children && config.children.length ) {
        let children = config.children;
        let len = config.children.length;
        let results = [];
        for(let i = 0; i < len; i++){
            const result = <Title />;
            results.push(result);
        }
    } else {
        return renderComponent(json); 
    }
}
Output 

[ 
    <Title />,
    [[<TextInput name="registration_location" />, <Radio name="is_renewal" />]],
    <RightSlideImage />
]


[ 
    <Title />,
    <Form>
        [
            <FormGroup>
                [
                    <TextInput name="registration_location" />,
                    <Radio name="is_renewal" />
                ]
            </FormGroup>,
            <FormGroup>
                [<TextInput name="registration_location" />]
            </FormGroup>
        ]
    </Form>,
    <RightSlideImage />
]