import React, { useEffect } from 'react';
import PageTitle from '../../../components/PageTitle';
import { Col, Form, message, Row, Select, Table } from "antd";
import { addExam } from '../../../apicalls/exams';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../../redux/loaderSlice';

function AddEditExam(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response = await addExam(values);
            if(response.success) {
                message.success(response.message);
                navigate("/admin/exams");
            } else{
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    return (
        <div>
            <PageTitle title="Add exam" />
            <div className='divider'></div>
            <Form layout = "vertical" onFinish={onFinish}>
                <Row gutter={[10, 10]}>
                    <Col span = {8}>
                        <Form.Item label = "Exam Name" name = "name">
                            <input type = "text" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Exam Duration" name = "duration">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Category" name = "category">
                            <input type = "text" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Total Marks" name = "totalMarks">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                    <Col span = {8}>
                        <Form.Item label = "Passing Marks" name = "passMarks">
                            <input type = "number" />
                        </Form.Item>
                    </Col>
                </Row>
                <div className='flex justify-end'>
                    <button className='primary-contained-btn' type="submit">Save</button>
                </div>
            </Form>
        </div>
    )
}

export default AddEditExam;