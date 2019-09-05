# Test creación paquete npm

## Instalar

```js

npm i package-test-v0

```

<!-- STORY -->

## Implementación 

```js
import { Datepicker } from 'package-test-v0';

const WrapperDatepicker = styled.div`
    width: 250px;
`;

const Wrapper = ()=> (
    <React.Fragment>
        <WrapperDatepicker>
            <Datepicker />
        </WrapperDatepicker>

        <WrapperDatepicker>
            <Datepicker 
                setValue={(date: Date) =>console.log('Esta es la fecha seleccionada', date)}
                placeholder="Seleccione una fecha"
            />
        </WrapperDatepicker>
    </React.Fragment>
)
```