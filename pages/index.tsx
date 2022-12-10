import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



       {/*ESSE SITE FOI FEITO COM BOOTSTRAP VERSAO 3.3.7 QUALQUER OUTRA VERSAO VAI BUGAR ESSA POHA! ASSINADO GEEFI I INDIO*/}

export default function Home() {
  return (



    <>

      {/*LINK BOOTSTRAP*/}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        </link>
      </Head>

      <div className="container-fluid">
        <header>
          <nav className="navbar navbar-default" style={{ backgroundColor: "#4682B4", borderColor: "#4682B4", marginTop: "" }}>
            <ul className="nav navbar-nav">
                {/*    <li><a href="#" style={{ color: "#FFFFFFF" }}>Painel</a></li>     */}
            </ul>
          </nav>
        </header>
        <div className="content-wrapper">
          <section className="content">
            <main>
              <div className="box-header with-border">
                <h3 className="box-title col-md-12">Clientes</h3>
              </div>


              {/*CONTAINER DAS TABELAS*/}
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th> </th>
                    <th>Numero de telefone</th>
                    <th>Codigo de email</th>
                    <th>Codigo de rastreio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-href="#">
                    <td><a className="btn btn-primary"
                      href="mvc?logica=RemoverPacienteLogica&id_paciente=${paciente.id_paciente}">Excluir</a>
                    </td>
                    <th>17 7777 7777</th>
                    <th>user@gmail.com</th>
                    <th>5555555</th>
                  </tr>
                </tbody>
                <tbody>

                  <tr data-href="#">
                    <td><a className="btn btn-primary"
                      href="mvc?logica=RemoverPacienteLogica&id_paciente=${paciente.id_paciente}">Excluir</a>
                    </td>
                    <th>17 7777 7777</th>
                    <th>user@gmail.com</th>
                    <th>5555555</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr data-href="#">
                    <td><a className="btn btn-primary"
                      href="mvc?logica=RemoverPacienteLogica&id_paciente=${paciente.id_paciente}">Excluir</a>
                    </td>
                    <th>17 7777 7777</th>
                    <th>user@gmail.com</th>
                    <th>5555555</th>
                  </tr>
                </tbody>
                <tbody>
                  <tr data-href="#">
                    <td><a className="btn btn-primary"
                      href="mvc?logica=RemoverPacienteLogica&id_paciente=${paciente.id_paciente}">Excluir</a>
                    </td>
                    <th>17 7777 7777</th>
                    <th>user@gmail.com</th>
                    <th>5555555</th>
                  </tr>
                </tbody>
              </table>


              {/*'NUMERAL PARA PASSAR DE PAGINA, MAIS EU ACREDITO QUE NAO VAI PRECISAR*/}
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li><a href="#aba1" role="tab" data-toggle="tab">1</a></li>
                  <li><a href="#aba2" role="tab" data-toggle="tab">2</a></li>
                  <li><a href="#aba3" role="tab" data-toggle="tab">3</a></li>
                </ul>
              </nav>
            </main>


                   {/*OS 3 BOTOES PERTO DO FOOTER*/}
            <button type="button" className="btn btn-primary">Novo Cliente</button>

            <a href="mvc?logica=NovoPacienteLogica" role="button"

              className="btn btn-primary">Adicionar Codigo</a>

            <a href="mvc?logica=NovoPacienteLogica" role="button"

              className="btn btn-primary">Enviar todos os codigos</a>
          </section>

        </div>

      </div>

      <footer className="navbar navbar-inverse navbar-fixed-bottom"
        style={{ backgroundColor: "#4682B4", borderColor: "#4682B4" }}>
        <div className="container-fluid">
          <p className="text-muted">

          </p>
        </div>
      </footer>

    </>
  )
}
