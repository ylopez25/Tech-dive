const express = require('express');
// const {createExam} = require('../controllers/exam-controller')
const Exam = require('../models/examModel')  //*1
const router = express.Router()

const dummyDataArray = [{
    "_id": "61e83d679dc59e6e8e11a1cf",
    "patientId": "Sssdccaaaa",
    "age": -85,
    "sex": "F",
    "zipCode": "720",
    "bmi": 27.46,
    "__v": 0,
    "examId": "Exam-1cczzxc",
    "keyFindings": " patchy increased opacity in the lower lobes bilaterally, more pronounced on the lateral view.  Small pleural effusions",
    "brixiaScores": "1,2,3,4",
    "imageURL": "Fzxcxscdzcxhttps://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434350_XR_CHEST_AP_PORTABLE_1.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c1",
    "patientId": "x888888",
    "age": 42,
    "sex": "m",
    "zipCode": "72100",
    "bmi": 22,
    "__v": 0,
    "examId": "Exam-4",
    "keyFindings": "Right basilar atelectasis",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_PORTABLE_2.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1d0",
    "patientId": "COVID-19-AR-16406502",
    "age": 88,
    "sex": "F",
    "zipCode": "721",
    "bmi": 34.9,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_PA_AND_LATERAL_4.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1d1",
    "patientId": "COVID-19-AR-16406502",
    "age": 88,
    "sex": "F",
    "zipCode": "721",
    "bmi": 34.9,
    "__v": 0,
    "examId": "Exam-2",
    "keyFindings": "vervRight basilar atelectasis",
    "brixiaScores": "jhvbhj",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_ONLY_2.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c9",
    "patientId": "COVID-19-AR-16406496",
    "age": 75,
    "sex": "F",
    "zipCode": "721",
    "bmi": 23.57,
    "__v": 0,
    "examId": "Exam-2",
    "keyFindings": "vervRight basilar atelectasis",
    "brixiaScores": "jhvbhj",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406496_XR_CHEST_AP_ONLY_3.png"
    },
    {
    "_id": "61eeb632b9e71f0016fe0f4d",
    "patientId": "COVID-805187",
    "age": 66,
    "sex": "M",
    "bmi": 30,
    "zipCode": "27850",
    "__v": 0,
    "examId": "Exam-955770",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "62059cba57da3edd1c049c17",
    "patientId": "COVID-728003",
    "age": 35,
    "sex": "M",
    "bmi": 49,
    "zipCode": "66225",
    "__v": 0,
    "examId": "Exam-311279",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c4",
    "patientId": "COVID-19-AR-16406513777",
    "age": 44,
    "sex": "M",
    "zipCode": "722",
    "bmi": 32.3,
    "__v": 0,
    "examId": "Exam-3",
    "keyFindings": "streaky opacities mainly in the lung bases near the hemidiaphragms.  Increased somewhat patchy opacities are now seen in both lung bases more conspicuous compared to the prior studies.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406513_XR_CHEST_AP_PORTABLE_3.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1cb",
    "patientId": "AAAA",
    "age": 5656,
    "sex": "F",
    "zipCode": "720",
    "bmi": 56.46,
    "__v": 0,
    "examId": "Exam-2",
    "keyFindings": "vervRight basilar atelectasis",
    "brixiaScores": "jhvbhj",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c7",
    "patientId": "COVID-19-AR-16406491",
    "age": 49,
    "sex": "F",
    "zipCode": "721",
    "bmi": 43.85,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406491_XR_CHEST_AP_PORTABLE_1.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1ce",
    "patientId": "COVID-19-AR-16406504",
    "age": 39,
    "sex": "M",
    "zipCode": "722",
    "bmi": 33.5,
    "__v": 0,
    "examId": "Exam-2",
    "keyFindings": "vervRight basilar atelectasis",
    "brixiaScores": "jhvbhj",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_ONLY_1.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c8",
    "patientId": "COVID-19-AR-16406496",
    "age": 75,
    "sex": "F",
    "zipCode": "721",
    "bmi": 23.57,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406496_XR_CHEST_AP_PORTABLE_1.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1d2",
    "patientId": "COVID-19-AR-16406502",
    "age": 88,
    "sex": "F",
    "zipCode": "721",
    "bmi": 34.9,
    "__v": 0,
    "examId": "Exam-4",
    "keyFindings": "Right basilar atelectasis",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_PORTABLE_5.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c0",
    "patientId": "COVID-19-AR-16434409",
    "age": 51,
    "sex": "M",
    "zipCode": "722",
    "bmi": 37.7,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c5",
    "patientId": "COVID-19-AR-16439216",
    "age": 61,
    "sex": "F",
    "zipCode": "722",
    "bmi": 36,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16439216_XR_CHEST_AP_PORTABLE_3.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1c6",
    "patientId": "COVID-19-AR-16439216",
    "age": 61,
    "sex": "F",
    "zipCode": "722",
    "bmi": 36,
    "__v": 0,
    "examId": "Exam-2",
    "keyFindings": "vervRight basilar atelectasis",
    "brixiaScores": "jhvbhj",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16439216_XR_CHEST_AP_PORTABLE_3.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1cd",
    "patientId": "COVID-19-AR-16406504",
    "age": 39,
    "sex": "M",
    "zipCode": "722",
    "bmi": 33.5,
    "__v": 0,
    "examId": "Exam-1",
    "keyFindings": "Indeterminate 2 cm left upper nodule, felt to represent a calcified  granuloma.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_PORTABLE_2.png"
    },
    {
    "_id": "61e83d679dc59e6e8e11a1d3",
    "patientId": "COVID-19-AR-16406502",
    "age": 88,
    "sex": "F",
    "zipCode": "721",
    "bmi": 34.9,
    "__v": 0,
    "examId": "Exam-6",
    "keyFindings": "The lungs  are clear and without focal consolidation.",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_PORTABLE_5.png"
    },
    {
    "_id": "61f8b913fec92e580dbc3ce7",
    "patientId": "COVID-457209",
    "age": 27,
    "sex": "M",
    "bmi": 43,
    "zipCode": "12731",
    "__v": 0,
    "examId": "Exam-990123",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63927c5da3b00c000e0885a8",
    "patientId": "COVID-780449",
    "age": 7,
    "sex": "M",
    "bmi": 34,
    "zipCode": "23482",
    "__v": 0,
    "examId": "Exam-132800",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63d860b622a1e4000e028c4a",
    "patientId": "COVID-381954",
    "age": 17,
    "sex": "M",
    "bmi": 81,
    "zipCode": "8584",
    "__v": 0,
    "examId": "Exam-248477",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63d988cb7f953f000e82aee1",
    "patientId": "COVID-680281",
    "age": 97,
    "sex": "M",
    "bmi": 82,
    "zipCode": "37110",
    "__v": 0,
    "examId": "Exam-537506",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63d988ea7f953f000e82b023",
    "patientId": "COVID-417230",
    "age": 52,
    "sex": "M",
    "bmi": 49,
    "zipCode": "46294",
    "__v": 0,
    "examId": "Exam-323490",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63da085697bef8000e088596",
    "patientId": "COVID-596302",
    "age": 52,
    "sex": "M",
    "bmi": 63,
    "zipCode": "62509",
    "__v": 0,
    "examId": "Exam-263450",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63da0e825af9a7000ec77362",
    "patientId": "COVID-133020",
    "age": 2,
    "sex": "M",
    "bmi": 20,
    "zipCode": "65026",
    "__v": 0,
    "examId": "Exam-622533",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63da0e895af9a7000ec77369",
    "patientId": "COVID-415311",
    "age": 20,
    "sex": "M",
    "bmi": 65,
    "zipCode": "24623",
    "__v": 0,
    "examId": "Exam-749288",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63da11f50c6acc000e28bd91",
    "patientId": "COVID-78418",
    "age": 18,
    "sex": "M",
    "bmi": 47,
    "zipCode": "85472",
    "__v": 0,
    "examId": "Exam-137289",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63dbde0c74d0ba000e020ab9",
    "patientId": "COVID-392788",
    "age": 55,
    "sex": "M",
    "bmi": 50,
    "zipCode": "64992",
    "__v": 0,
    "examId": "Exam-360258zzzzzzz",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ddafa5c97855000e3a3994",
    "patientId": "COVID-908018",
    "age": 44,
    "sex": "M",
    "bmi": 41,
    "zipCode": "58873",
    "__v": 0,
    "examId": "Exam-20224",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ddb166c97855000e3a3c86",
    "patientId": "COVID-53562",
    "age": 37,
    "sex": "M",
    "bmi": 44,
    "zipCode": "43288",
    "__v": 0,
    "examId": "Exam-32193",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ddb16ac97855000e3a3c8d",
    "patientId": "COVID-717780",
    "age": 31,
    "sex": "M",
    "bmi": 41,
    "zipCode": "65381",
    "__v": 0,
    "examId": "Exam-876811",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63e1a0b6685442000e4c97b3",
    "patientId": "COVID-82931",
    "age": 29,
    "sex": "M",
    "bmi": 32,
    "zipCode": "79984",
    "__v": 0,
    "examId": "Exam-314879",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63e479a1fceb2f000ebed5d4",
    "patientId": "COVID-526176",
    "age": 20,
    "sex": "M",
    "bmi": 59,
    "zipCode": "84751",
    "__v": 0,
    "examId": "Exam-134697",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63e479b1206cfc000e61fd68",
    "patientId": "COVID-710250",
    "age": 27,
    "sex": "M",
    "bmi": 55,
    "zipCode": "51322",
    "__v": 0,
    "examId": "Exam-788132",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63e5aa943048be000e367e32",
    "patientId": "COVID-601558",
    "age": 56,
    "sex": "M",
    "bmi": 20,
    "zipCode": "84109",
    "__v": 0,
    "examId": "Exam-871336",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63e997d2c4b858000ed7f414",
    "patientId": "qqqqqqqqqqqq",
    "age": 12,
    "sex": "F",
    "bmi": 30,
    "zipCode": "121212",
    "__v": 0,
    "examId": "1341",
    "keyFindings": "dwdwddwddwdwd",
    "brixiaScores": "1,2,3,4",
    "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"
    },
    {
    "_id": "63eab77fc4b858000ed893fd",
    "patientId": "COVID-287016",
    "age": 20,
    "sex": "M",
    "bmi": 24,
    "zipCode": "65327",
    "__v": 0,
    "examId": "Exam-51466",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ec79aeba26d0000e6d7968",
    "patientId": "COVID-971650",
    "age": 66,
    "sex": "M",
    "bmi": 72,
    "zipCode": "89220",
    "__v": 0,
    "examId": "Exam-894189",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ec79d9ba26d0000e6d79be",
    "patientId": "TCOVID-959333",
    "age": 1,
    "sex": "M",
    "bmi": 6,
    "zipCode": "3903",
    "__v": 0,
    "examId": "Exam-72819",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63f038e37d91ee000e680776",
    "patientId": "12564721",
    "age": 22,
    "sex": "M",
    "bmi": 222,
    "zipCode": "10001",
    "__v": 0,
    "examId": "21iu3yiou123",
    "keyFindings": "Eveyrthing",
    "brixiaScores": "1,2,3,4",
    "imageURL": "www.facebook.com"
    },
    {
    "_id": "63f14957dc8e40000e162d06",
    "patientId": "COVID-766857",
    "age": 78,
    "sex": "M",
    "bmi": 56,
    "zipCode": "52870",
    "__v": 0,
    "examId": "Exam-560376",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63f69a5879dd66000e5c0d85",
    "patientId": "COVID-19-AR_1234321",
    "age": 90,
    "sex": "f",
    "bmi": 23,
    "zipCode": "000001",
    "__v": 0,
    "examId": "EXAM-23",
    "keyFindings": "",
    "brixiaScores": "",
    "imageURL": ""
    },
    {
    "_id": "63f6b385bbf53c000e578715",
    "patientId": "COVID-436310",
    "age": 61,
    "sex": "M",
    "bmi": 98,
    "zipCode": "50706",
    "__v": 0,
    "examId": "Exam-459773",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63f8d265bbf53c000e597941",
    "patientId": "COVID-880565",
    "age": 69,
    "sex": "M",
    "bmi": 86,
    "zipCode": "27629",
    "__v": 0,
    "examId": "Exam-307108",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63f92dedbbf53c000e5dfa1e",
    "patientId": "COVID-571581",
    "age": 28,
    "sex": "M",
    "bmi": 48,
    "zipCode": "64024",
    "__v": 0,
    "examId": "Exam-433996",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63fbefa9a147ed000e23bdd6",
    "patientId": "COVID-418452",
    "age": 84,
    "sex": "M",
    "bmi": 9,
    "zipCode": "86647",
    "__v": 0,
    "examId": "Exam-621279",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63fd24eddc28da000ef2831d",
    "patientId": "COVID-686512",
    "age": 68,
    "sex": "M",
    "bmi": 35,
    "zipCode": "4482",
    "__v": 0,
    "examId": "Exam-372070",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63fef88c921ead000ef5ef6f",
    "patientId": "COVID-811413",
    "age": 87,
    "sex": "M",
    "bmi": 68,
    "zipCode": "77866",
    "__v": 0,
    "examId": "Exam-201228",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "63ff6a48dc28da000e05b467",
    "patientId": "5643",
    "age": 56,
    "sex": "Male",
    "bmi": 54453354,
    "zipCode": "54354345",
    "__v": 0,
    "examId": "344",
    "keyFindings": "5454345",
    "brixiaScores": "55,55,55",
    "imageURL": "344345543"
    },
    {
    "_id": "6402978b0d3172000e6d0eeb",
    "patientId": "COVID-994934",
    "age": 91,
    "sex": "M",
    "bmi": 35,
    "zipCode": "80056",
    "__v": 0,
    "examId": "Exam-723968",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "6403f274a555e2000ea99202",
    "patientId": "COVID-257787",
    "age": 62,
    "sex": "M",
    "bmi": 33,
    "zipCode": "82804",
    "__v": 0,
    "examId": "Exam-957428",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "6405461cb31163000e3d8974",
    "patientId": "COVID-357594",
    "age": 13,
    "sex": "M",
    "bmi": 92,
    "zipCode": "59663",
    "__v": 0,
    "examId": "Exam-137806",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "64093a64846b40000e1944c3",
    "patientId": "COVID-176650",
    "age": 87,
    "sex": "M",
    "bmi": 50,
    "zipCode": "46089",
    "__v": 0,
    "examId": "Exam-898383",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "640a160a846b40000e1946eb",
    "patientId": "COVID-33392",
    "age": 96,
    "sex": "M",
    "bmi": 1,
    "zipCode": "79933",
    "__v": 0,
    "examId": "Exam-710940",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "640a1f98846b40000e1946f4",
    "patientId": "COVID-16976",
    "age": 87,
    "sex": "M",
    "bmi": 16,
    "zipCode": "43021",
    "__v": 0,
    "examId": "Exam-111235",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "640a21cb846b40000e1946fb",
    "patientId": "COVID-894366",
    "age": 44,
    "sex": "M",
    "bmi": 0,
    "zipCode": "40838",
    "__v": 0,
    "examId": "Exam-704300",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "640bdc3a78d6c0000e0e19ea",
    "patientId": "COVID-208341",
    "age": 40,
    "sex": "M",
    "bmi": 30,
    "zipCode": "29407",
    "__v": 0,
    "examId": "Exam-675951",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "6413cdca93bee6000ed46076",
    "patientId": "x888888",
    "age": 42,
    "sex": "m",
    "zipCode": "72100",
    "bmi": 22,
    "__v": 0,
    "examId": "Exam-105695",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65b5ffd7b8e328000e5deb45",
    "patientId": "COVID-515355",
    "age": 14,
    "sex": "M",
    "bmi": 30,
    "zipCode": "8539",
    "__v": 0,
    "examId": "Exam-851273",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65b91523fed289000efb3bbd",
    "patientId": "COVID-179635",
    "age": 13,
    "sex": "M",
    "bmi": 65,
    "zipCode": "17979",
    "__v": 0,
    "examId": "Exam-871514",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    null,
    {
    "_id": "65c2b42a7b7053000e920018",
    "patientId": "COVID-873707",
    "age": 41,
    "sex": "M",
    "bmi": 38,
    "zipCode": "22817",
    "__v": 0,
    "examId": "Exam-905591",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65c3daf0741c53000e99964d",
    "patientId": "COVID-452667",
    "age": 6,
    "sex": "M",
    "bmi": 65,
    "zipCode": "36980",
    "__v": 0,
    "examId": "Exam-754110",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65c3f9df741c53000e999acd",
    "patientId": "COVID-934188",
    "age": 92,
    "sex": "M",
    "bmi": 41,
    "zipCode": "27868",
    "__v": 0,
    "examId": "Exam-458213",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65c43dba741c53000e99b95e",
    "patientId": "COVID-719977",
    "age": 41,
    "sex": "M",
    "bmi": 92,
    "zipCode": "79347",
    "__v": 0,
    "examId": "Exam-136702",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65cf13efb9a764000e6415f5",
    "patientId": "COVID-346172",
    "age": 84,
    "sex": "M",
    "bmi": 49,
    "zipCode": "39747",
    "__v": 0,
    "examId": "Exam-369811",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65d2889005fbe1000e4bb96e",
    "patientId": "COVID-129178",
    "age": 97,
    "sex": "M",
    "bmi": 50,
    "zipCode": "50343",
    "__v": 0,
    "examId": "Exam-894686",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65d2889405fbe1000e4bb975",
    "patientId": "COVID-210038",
    "age": 37,
    "sex": "M",
    "bmi": 52,
    "zipCode": "52026",
    "__v": 0,
    "examId": "Exam-979290",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    },
    {
    "_id": "65d8308d05fbe1000e4fb36c",
    "patientId": "COVID-524892",
    "age": 22,
    "sex": "M",
    "bmi": 82,
    "zipCode": "61573",
    "__v": 0,
    "examId": "Exam-406452",
    "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.",
    "brixiaScores": "1,2,3,4,5,6",
    "imageURL": "https://picsum.photos/200/200"
    }
]

// import dummyDataArray from "./dummyDataArr"
//* route imports

//* controller imports
// const mongoose = require('mongoose')


// let payload;
//dummy data array
// router.post('/createExam', async (payload, res, next) => {
//     const { adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScores, imageURL } = payload
//     // console.log(req.body, "REQ BODYYY");
//     try {
//         const exam = await Exam.create({ adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScores, imageURL })
//         res.status(200).json(exam)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }

// })

export async function massCreate(arr) {
    
    for (let  i = 0;  i < 2;  i++) {
        // const exam = exams[i];


    router.post('/massPost', async (req, res, next) => {

        const exam = req.body[i]
        // console.log(exams, "Exams array");

                console.log(exam, "Single EXAMM");
                
                let payload = {
                    "adminId": 2, 
                    "patientId": exam.patientId, 
                    "age": exam.age, 
                    "sex": exam.sex, 
                    "zipCode": exam.zipCode, 
                    "bmi": exam.bmi, 
                    "examTypeId": exam.examId, 
                    "keyFindings": exam.keyFindings, 
                    "brixiaScores": exam.brixiaScores, 
                    "imageURL": exam.imageURL
                }
    
                const { adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScores, imageURL } = payload
                // console.log(req.body, "REQ BODYYY");
                try {
                    const newExam = await Exam.create({ adminId, patientId, age, sex, zipCode, bmi, examTypeId, keyFindings, brixiaScores, imageURL })
                    res.status(200).json(newExam)
                    console.log(newExam);
                } catch (error) {
                    res.status(400).json({ error: error.message })
                }
            })

        }
        
        


}

massCreate(dummyDataArray)

module.exports = router
