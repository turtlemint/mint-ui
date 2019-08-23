import React, { useState } from 'react';
import './app.css';
import Button from 'components/button';
import Input from 'components/input';
import Row from 'components/grid/row';
import Col from 'components/grid/col';
import Checkbox from 'components/checkbox';
import PALETTE from '__utils/colors';

const App: React.FC<{}> = () => {
    // common change handler and variables kept for demo purposes only. 
    // Please don't take any inspiration :smile_cat:
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (val: boolean) => {
        setChecked(val)
    }
    const handleChange = (val: string) => {
        setInputValue(val);
    }
    const [inputValue, setInputValue] = useState('Default Value');

    return (
        <div className="App">
            <div className='text-center'>
                <Row className='mb15'>
                    <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus, officiis provident consectetur, vero molestias dicta ab eaque tempora temporibus, non doloremque vel soluta minus aspernatur nostrum commodi voluptatibus animi.</Col>
                </Row>
                <Row className='mb15'>
                    <Col md={4}><Button btnType='outlined' onClick={() => { }}>Button Label</Button></Col>
                    <Col md={4}><Button btnType='outlined' disabled>Button Label</Button></Col>
                    <Col md={4}>
                        <Button btnType='outlined' disabled size='sm' onClick={() => { }}>Button Label</Button>
                    </Col>
                </Row>
                <Row className='mb15'>
                    <Col sm={4}>
                        <Button onClick={() => { }}>Button Label</Button>
                    </Col>
                    <Col sm={4}>
                        <Button disabled onClick={() => { }}>Button Label</Button>
                    </Col>
                    <Col sm={4}>
                        <Button disabled size='sm' onClick={() => { }}>Button Label</Button>
                    </Col>
                </Row>
                <Row className='mb15'>
                    <Col sm={6}>
                        <Button btnType='link' href='#'>Button Label</Button>
                    </Col>
                    <Col sm={6}>
                        <Button id='#disabled-link' name='btn-link-disabled' btnType='link' className='alpha' href='#' disabled>Button Link Disabled</Button>
                    </Col>
                </Row>
                <Row className='mb15'>
                    <Col sm={6}>
                        <Button btnType='danger' href='#'>Button Danger</Button>
                    </Col>
                    <Col sm={6}>
                        <Button btnType='danger' href='#' disabled>Button Danger</Button>
                    </Col>
                </Row>
                <Row className='mb15'>
                    <Col lg={3}>
                        <Button size='sm' icon='checkbox' />
                    </Col>
                    <Col lg={3}>
                        <Button size='sm' icon='checkbox'>
                            Icon button
                        </Button>
                    </Col>
                    <Col lg={3}> Col 3 Grid</Col>
                    <Col lg={3}> Col 3 Grid</Col>
                </Row>
                <Row className='mb15'>
                    <Col xl={4}>
                        <Input
                            placeholder='Placeholder'
                            label='Label of the field/Regular'
                            error='Numbers are not allowed. This error can flow into next line as well'
                            onChange={handleChange}
                            value={inputValue} />
                    </Col>
                    <Col xl={4}>
                        <Input
                            placeholder='Placeholder'
                            label='Label of the field/Regular'
                            helpText='Help text can go here'
                            block={true}
                            value={inputValue}
                            onChange={(val: string) => {
                                setInputValue(val);
                            }} />
                    </Col>
                    <Col xl={4}>
                        <Input
                            value=''
                            disabled
                            placeholder='Placeholder'
                            label='Label of the field/Regular'
                            helpText='Help text can go here'
                            block={true} />
                    </Col>
                </Row>
                <Row className='mb15'>
                    <Col xl={4}>
                        <Checkbox checked={checked} onChange={handleCheckboxChange} color={PALETTE.PRIMARY}>
                            Name on the previous policy is of someone else.
                        </Checkbox>
                    </Col>
                    <Col xl={4}>
                        <Checkbox checked={checked} indeterminate={true} onChange={handleCheckboxChange}>
                            Name on the previous policy is of someone else.
                        </Checkbox>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
