import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import {Masks} from 'react-native-mask-input';
import {Feather} from '@expo/vector-icons';
import {Input} from '@/src/Components/Input';
import {Button} from '@/src/Components/Button';
import {RadioOption} from '@/src/Components/RadioOptions';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  Placeholder,
  Content,
  InputGroup,
  Label,
  Row,
  HalfWidth,
  RadioGroup,
  ButtonContainer,
} from './styles';
import {router} from 'expo-router';

interface FormData {
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: boolean | null;
}

const timeMask = (text: string = '') => {
  const cleanTime = text.replace(/\D+/g, '');

  if (cleanTime.charAt(0) === '2') {
    return [/[0-2]/, /[0-3]/, ':', /[0-5]/, /[0-9]/];
  }
  return [/[0-1]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];
};

export default function NovaRefeicaoScreen() {
  const [selectedDiet, setSelectedDiet] = useState<boolean | null>(null);

  const {control, handleSubmit, setValue} = useForm<FormData>({
    defaultValues: __DEV__
      ? {
          name: 'Rafael',
          description: 'Mó fome',
          date: '12/12/2025',
          time: '12:00',
          isInDiet: true,
        }
      : {
          name: '',
          description: '',
          date: '',
          time: '',
          isInDiet: null,
        },
  });

  const onSubmit = (data: FormData) => {
    const formData = {
      ...data,
      isInDiet: selectedDiet,
    };
    console.log('Dados da refeição:', formData);
  };

  const handleDietSelection = (isInDiet: boolean) => {
    setSelectedDiet(isInDiet);
    setValue('isInDiet', isInDiet);
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <BackButton onPress={router.back}>
            <Feather name="arrow-left" size={24} color="#1B1D1E" />
          </BackButton>
          <HeaderTitle>Nova refeição</HeaderTitle>
          <Placeholder />
        </Header>

        <Content>
          <InputGroup>
            <Label>Nome</Label>
            <Input
              control={control}
              name="name"
              placeholder="Digite o nome da refeição"
              height={50}
            />
          </InputGroup>

          <InputGroup>
            <Label>Descrição</Label>
            <Input
              control={control}
              name="description"
              placeholder="Digite a descrição da refeição"
              multiline
              textAlignVertical="top"
              height={150}
            />
          </InputGroup>

          <Row>
            <HalfWidth>
              <InputGroup>
                <Label>Data</Label>
                <Input
                  control={control}
                  name="date"
                  placeholder="DD/MM/AAAA"
                  mask={Masks.DATE_DDMMYYYY}
                  height={50}
                />
              </InputGroup>
            </HalfWidth>

            <HalfWidth>
              <InputGroup>
                <Label>Hora</Label>
                <Input
                  control={control}
                  name="time"
                  placeholder="HH:MM"
                  mask={timeMask}
                  height={50}
                />
              </InputGroup>
            </HalfWidth>
          </Row>

          <InputGroup>
            <Label>Está dentro da dieta?</Label>

            <RadioGroup>
              <RadioOption
                label="Sim"
                isSelected={selectedDiet === true}
                variant="yes"
                onPress={() => handleDietSelection(true)}
              />

              <RadioOption
                label="Não"
                isSelected={selectedDiet === false}
                variant="no"
                onPress={() => handleDietSelection(false)}
              />
            </RadioGroup>
          </InputGroup>

          <ButtonContainer>
            <Button
              onPress={handleSubmit(onSubmit)}
              backgroundColor="#333638"
              textColor="#FAFAFA">
              Cadastrar refeição
            </Button>
          </ButtonContainer>
        </Content>
      </ScrollView>
    </Container>
  );
}
