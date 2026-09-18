/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformTransformationTokenizationStoreConfig extends cdktn.TerraformMetaArguments {
  /**
  * A database connection string with template slots for username and password that Vault will use for locating and connecting to a database. Each database driver type has a different syntax for its connection strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#connection_string TransformTransformationTokenizationStore#connection_string}
  */
  readonly connectionString: string;
  /**
  * Specifies the database driver to use, and thus which SQL database type. Currently the supported options are postgres, mysql, and mssql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#driver TransformTransformationTokenizationStore#driver}
  */
  readonly driver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#id TransformTransformationTokenizationStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum amount of time a connection can be open before closing it. 0 means no limit. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_connection_lifetime TransformTransformationTokenizationStore#max_connection_lifetime}
  */
  readonly maxConnectionLifetime?: number;
  /**
  * The maximum number of idle connections to the database at any given time. Default is 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_idle_connections TransformTransformationTokenizationStore#max_idle_connections}
  */
  readonly maxIdleConnections?: number;
  /**
  * The maximum number of connections to the database at any given time. Default is 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#max_open_connections TransformTransformationTokenizationStore#max_open_connections}
  */
  readonly maxOpenConnections?: number;
  /**
  * The name of the store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#name TransformTransformationTokenizationStore#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#namespace TransformTransformationTokenizationStore#namespace}
  */
  readonly namespace?: string;
  /**
  * Password value to use to connect to database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#password TransformTransformationTokenizationStore#password}
  */
  readonly password: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#path TransformTransformationTokenizationStore#path}
  */
  readonly path: string;
  /**
  * The schema within the database to expect tokenization state tables. Default is "public".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#schema TransformTransformationTokenizationStore#schema}
  */
  readonly schema?: string;
  /**
  * The types of transformations this store can support, currently only "tokenization" is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#supported_transformations TransformTransformationTokenizationStore#supported_transformations}
  */
  readonly supportedTransformations?: string[];
  /**
  * Specifies the type of store, currently only "sql" is supported,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#type TransformTransformationTokenizationStore#type}
  */
  readonly type: string;
  /**
  * Username value to use to connect to database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#username TransformTransformationTokenizationStore#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store}
*/
export class TransformTransformationTokenizationStore extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation_tokenization_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformTransformationTokenizationStore resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformTransformationTokenizationStore to import
  * @param importFromId The id of the existing TransformTransformationTokenizationStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformTransformationTokenizationStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_transformation_tokenization_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.12.0/docs/resources/transform_transformation_tokenization_store vault_transform_transformation_tokenization_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationTokenizationStoreConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationTokenizationStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation_tokenization_store',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.12.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionString = config.connectionString;
    this._driver = config.driver;
    this._id = config.id;
    this._maxConnectionLifetime = config.maxConnectionLifetime;
    this._maxIdleConnections = config.maxIdleConnections;
    this._maxOpenConnections = config.maxOpenConnections;
    this._name = config.name;
    this._namespace = config.namespace;
    this._password = config.password;
    this._path = config.path;
    this._schema = config.schema;
    this._supportedTransformations = config.supportedTransformations;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_connection_lifetime - computed: false, optional: true, required: false
  private _maxConnectionLifetime?: number; 
  public get maxConnectionLifetime() {
    return this.getNumberAttribute('max_connection_lifetime');
  }
  public set maxConnectionLifetime(value: number) {
    this._maxConnectionLifetime = value;
  }
  public resetMaxConnectionLifetime() {
    this._maxConnectionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLifetimeInput() {
    return this._maxConnectionLifetime;
  }

  // max_idle_connections - computed: false, optional: true, required: false
  private _maxIdleConnections?: number; 
  public get maxIdleConnections() {
    return this.getNumberAttribute('max_idle_connections');
  }
  public set maxIdleConnections(value: number) {
    this._maxIdleConnections = value;
  }
  public resetMaxIdleConnections() {
    this._maxIdleConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsInput() {
    return this._maxIdleConnections;
  }

  // max_open_connections - computed: false, optional: true, required: false
  private _maxOpenConnections?: number; 
  public get maxOpenConnections() {
    return this.getNumberAttribute('max_open_connections');
  }
  public set maxOpenConnections(value: number) {
    this._maxOpenConnections = value;
  }
  public resetMaxOpenConnections() {
    this._maxOpenConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnectionsInput() {
    return this._maxOpenConnections;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // supported_transformations - computed: true, optional: true, required: false
  private _supportedTransformations?: string[]; 
  public get supportedTransformations() {
    return this.getListAttribute('supported_transformations');
  }
  public set supportedTransformations(value: string[]) {
    this._supportedTransformations = value;
  }
  public resetSupportedTransformations() {
    this._supportedTransformations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTransformationsInput() {
    return this._supportedTransformations;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_string: cdktn.stringToTerraform(this._connectionString),
      driver: cdktn.stringToTerraform(this._driver),
      id: cdktn.stringToTerraform(this._id),
      max_connection_lifetime: cdktn.numberToTerraform(this._maxConnectionLifetime),
      max_idle_connections: cdktn.numberToTerraform(this._maxIdleConnections),
      max_open_connections: cdktn.numberToTerraform(this._maxOpenConnections),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      password: cdktn.stringToTerraform(this._password),
      path: cdktn.stringToTerraform(this._path),
      schema: cdktn.stringToTerraform(this._schema),
      supported_transformations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedTransformations),
      type: cdktn.stringToTerraform(this._type),
      username: cdktn.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_string: {
        value: cdktn.stringToHclTerraform(this._connectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver: {
        value: cdktn.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connection_lifetime: {
        value: cdktn.numberToHclTerraform(this._maxConnectionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_idle_connections: {
        value: cdktn.numberToHclTerraform(this._maxIdleConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_open_connections: {
        value: cdktn.numberToHclTerraform(this._maxOpenConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_transformations: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedTransformations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktn.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
