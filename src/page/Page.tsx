import React, {ChangeEvent, FormEvent, useState} from "react"
import styled from "styled-components";
import {PageBasicStyle} from "../style/BasicStyle.js";
import Button from "../component/atoms/Button";
import footer from "../component/organisms/Footer";
import Input from "../component/atoms/Input";
import {set, useForm} from "react-hook-form";

type Information = { name: string, description: string }

const PageStyle = styled.div`
  ${PageBasicStyle};

  background-color: #f00;

  & > .content {
    background-color: #0f0;
  }
`

type MyFormProps = {
    onSubmit: (form: Information) => void,
}

const MyForm = ({onSubmit}: MyFormProps) => {
    const [form, setForm] = useState<Information>({
        name: "",
        description: ""
    })

    const {name, description} = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form, [name]: value
        })
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(form)
        setForm({name: "", description: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={"name"} value={name} onChange={onChange}/>
            <input name={"description"} value={description} onChange={onChange}/>
            <Button type={"submit"}>등록</Button>
        </form>
    )
}

const Page = () => {
    const {register, watch} = useForm({
        defaultValues: {
            name: "Asdasd"
        }
    });

    const [a, setA] = useState(false)

    return (
        <PageStyle>
            <div className="content">
                <Input placeholder={"sdas"} register={register("name")} readOnly={a}/>
                <Button onClick={() => setA(!a)}>sdasdas</Button>
            </div>
        </PageStyle>
    )
}

export default React.memo(Page)