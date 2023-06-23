import React, { useEffect } from 'react';
import PageTitle from '../../../components/PageTitle';
import { Col, Form, message, Row, Select, Table, Tabs } from "antd";
import { addExam, editExamById } from '../../../apicalls/exams';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../../redux/loaderSlice';
import { getExamById } from '../../../apicalls/exams';
import TabPane from 'antd/es/tabs/TabPane';
import AddEditQuestion from './AddEditQuestion';

function AddEditExam() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [examData, setExamData] = React.useState(null);
    const [showAddEditQuestionModal, setShowAddEditQuestionModal] =
    React.useState(false);
    const params = useParams();
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            let response;
            if (params.id) {
                response = await editExamById({
                    ...values,
                    examId: params.id
                });
            } else {
                response = await addExam(values);
            }
            if (response.success) {
                message.success(response.message);
                navigate("/admin/exams");
            } else {
                message.error(response.message);
            }
            dispatch(HideLoading());
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    const getExamData = async () => {
        try {
            dispatch(ShowLoading());
            const response = await getExamById({
                examId: params.id,
            });
            dispatch(HideLoading());
            if (response.success) {
                setExamData(response.data);
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    }

    useEffect(() => {
        if (params.id) {
            getExamData();
        }
    }, [])

    return (
        <div>
            <PageTitle title={params.id ? "Edit Exam" : "Add Exam"} />
            <div className='divider'></div>
            {(examData || !params.id) && (
                <Form layout="vertical" onFinish={onFinish} initialValues={examData}>
                    <Tabs defaultActiveKey='1'>
                        <TabPane tab="Exam Details" key="1">
                            <Row gutter={[10, 10]}>
                                <Col span={8}>
                                    <Form.Item label="Exam Name" name="name">
                                        <input type="text" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Exam Duration" name="duration">
                                        <input type="number" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Category" name="category">
                                        <input type="text" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Total Marks" name="totalMarks">
                                        <input type="number" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Passing Marks" name="passMarks">
                                        <input type="number" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <div className='flex justify-end gap-2'>
                                <button className='primary-outlined-btn gap' type="button" onClick={() => navigate("/admin/exams")}>Cancel</button>
                                <button className='primary-contained-btn' type="submit">Save</button>
                            </div>
                        </TabPane>
                        {params.id && (
                            <TabPane tab="Questions" key="2">
                                <div className='flex justify-end'>
                                <button className='primary-outlined-btn'
                                onClick={() => setShowAddEditQuestionModal(true)}
                                type = "button">
                                    Add Question
                                </button>
                                </div>
                            </TabPane>
                        )}
                    </Tabs>
                </Form>
            )}
            {showAddEditQuestionModal && <AddEditQuestion 
                setShowAddEditQuestionModal={setShowAddEditQuestionModal}
                showAddEditQuestionModal = {showAddEditQuestionModal}
                examId = {params.id}
                refreshData = {getExamData}
            />}
        </div>
    )
}

export default AddEditExam;