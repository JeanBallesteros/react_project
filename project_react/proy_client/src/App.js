import logo from './logo.svg';
import './App.scss';
import 'antd/dist/antd.css';
import { Alert } from 'antd';
import { DatePicker } from 'antd';
import { Card } from 'antd';

function App() {
  return (
    <div className="container">
      <h1> Prueba Proyecto</h1>
      <span>Programación III</span>
      <div>
        {/* Sección de alertas */}
        <Alert message='Success Text' type='success'/>
        <Alert message='Info Text' type='info'/>
        <Alert message='Warning Text' type='warning'/>
        <Alert message='Error Text' type='error'/>
      </div>
      <div>
        <label>Selecciona una fecha</label>
        <DatePicker onChange={'date_test'}></DatePicker>
      </div>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentación'
          extra={<a href='#'>Ver más</a>}
          style={{ width: 300 }}>
          <p>Jean Ballesteros</p>
          <p>Ingeniería de Software II</p>
          <p>
            <small>jeanc.ballesterosz@autonoma.edu.co</small>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
