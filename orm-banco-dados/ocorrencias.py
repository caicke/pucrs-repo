import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///BD/ocorrencias.db")

base = orm.declarative_base()

# Tabela Departamento de Policia
class DepartamentoPolicia(base):
    __tablename__ = "tbDP"

    codDP = sa.Column(sa.INTEGER, primary_key = True, index= True)
    nome = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(200), nullable=False)

# Tabela Responsavel DP
class ResponsavelDP(base):
    __tablename__ = "tbResponsavelDP"

    codDP = sa.Column(sa.INTEGER, primary_key = True, index= True)
    delegado = sa.Column(sa.VARCHAR(100), nullable=False)

# Tabela Municipio
class Municipio(base):
    __tablename__ = "tbMunicipio"
    
    codIBGE = sa.Column(sa.INTEGER, primary_key= True, index= True)
    dsc_produto = sa.Column(sa.VARCHAR(100), nullable= False)
    regiao = sa.Column(sa.VARCHAR(25), nullable= False)

# Tabela Ocorrencias
class Ocorrencias(base):
    __tablename__ = "tbOcorrencias"

    idRegistro = sa.Column(sa.INTEGER, primary_key = True, index= True)
    codDP = sa.Column(sa.INTEGER, sa.ForeignKey("tbDP.codDP",
                                                ondelete= "NO ACTION",
                                                onupdate= "CASCADE"))
    codIBGE = sa.Column(sa.INTEGER, sa.ForeignKey("tbMunicipio.codIBGE",
                                                ondelete= "NO ACTION",
                                                onupdate= "CASCADE"))
    ano = sa.Column(sa.CHAR(4), nullable= False)
    mes = sa.Column(sa.VARCHAR(2), nullable= False)
    ocorrencia = sa.Column(sa.VARCHAR(100), nullable= False)
    qtde = sa.Column(sa.INTEGER, nullable= False)

try:
    base.metadata.create_all(engine) # criar as tabelas
    print("Tabelas criadas")
except ValueError:
    ValueError()