import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { SimNaoTransformer } from "./transformer/SimNaoTransformer";

export enum TipoUsuario {
	ADMINISTRADOR = "Administrador",
	OPERADOR = "Operador",
}

@Entity()
export class Usuarios {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	id_empresa: number;

	@Column({})
	dt_cadastro: Date;

	@Column({ nullable: false })
	nome: string;

	@Column({})
	senha: string;

	@Column({})
	endereco: string;

	@Column({})
	bairro: string;
	@Column({})
	cep: string;

	@Column({})
	id_cidade: number;

	@Column({})
	cpf: string;

	@Column({})
	fone_residencia: string;

	@Column({})
	fone_celular: string;

	@Column({ type: "enum", enum: TipoUsuario, enumName: "TipoUsuario", default: TipoUsuario.OPERADOR })
	tipo: TipoUsuario;

	@Column({})
	desconto_venda: number;

	@Column({})
	desconto_receber: number;

	@Column({})
	altera_prc_unit_orc: boolean;

	@Column({})
	altera_prc_produto: boolean;

	@Column({})
	altera_data_venda: boolean;

	@Column({})
	altera_data_pgto: boolean;

	@Column({})
	fecha_venda: boolean;

	@Column({})
	quitar_receber: boolean;

	@Column({})
	quitar_pagar: boolean;

	@Column({})
	exibe_resumodia: boolean;

	@Column({})
	click: boolean;

	@Column({})
	id_caixa: number;

	@Column({})
	id_impressora: number;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	data_caixa: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	juro_receber: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	juro_pagar: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	altera_valor_receber: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	altera_valor_pagar: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	uniao_conta: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	gera_conta: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	transferencia_conta: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	desdobramento: boolean;

	@Column({})
	id_vendedor: number;

	@Column({})
	expedicao: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	uniao_orcamento: boolean;

	@Column({})
	codigo_autorizacao: string;

	@Column({})
	mixvenda: string;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	vendedor_venda: boolean;

	@Column({type: "character", length: 3, transformer: new SimNaoTransformer("SIM", "NAO")})
	altera_cxvenda: boolean;

	@Column({})
	bloqueio_cliente: boolean;

	@Column({})
	altera_obs: string;

	@Column({ nullable: false })
	liberacao_venda: string;

	@Column({ nullable: false })
	acerto_estoque_equipamento: boolean;

	@Column({ nullable: false })
	permite_exclusao_fabricacao: boolean;

	@Column({ nullable: false })
	transferencia_estoque: boolean;

	@Column({ nullable: false })
	altera_ponto: boolean;

	@Column({})
	alterar_serial: boolean;

	@Column({ nullable: false })
	alterar_cadastro_romaneio: boolean;

	@Column({ nullable: false })
	acerto_estoque: number;

	@Column({ nullable: false })
	altera_preco_consulta_rapida: boolean;

	@Column({ nullable: false })
	fechar_troca: boolean;

	@Column({ nullable: false })
	classificacao_os: boolean;

	@Column({})
	abrir_venda_uso: boolean;

	@Column({})
	editar_inventario: boolean;

	@Column({ nullable: false })
	alterar_entrada_prevenda: boolean;

	@Column({ nullable: false })
	percentual_minimo_entrada: number;

	@Column({})
	habilitar_lancamento_balanco: boolean;

	@Column({ nullable: false })
	ativo: boolean;

	@Column({})
	multa: boolean;

	@Column({})
	altera_prc_unit_orc_mais: boolean;

	@Column({})
	entrada_nota: boolean;

	@Column({ nullable: false })
	multa_receber: boolean;

	@Column({})
	uf: string;

	@Column({ nullable: false })
	alterar_insumo_fabricacao: boolean;

	@Column({})
	delitem: boolean;

	@Column({})
	id_sti: number;

	@Column({})
	desconto_especial: boolean;

	@Column({})
	valor_limite_nfe: number;

	@Column({})
	valor_limite_nfce: number;

	@Column({})
	login: string;

	@Column({})
	password: string;

	@Column({})
	permissao_exclusao_arquivo: boolean;

	@Column({})
	estorno_credito_usado: boolean;

	@Column({})
	tranferencia_portador_origem_debito: number;

	@Column({})
	transferencia_portador_destino_credito: number;

	@Column({})
	tranferencia_portador_origem: number;

	@Column({})
	transferencia_portador_destino: number;

	@Column({})
	servidor_whatsapp: string;
}
