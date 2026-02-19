/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MongodbatlasSecretBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#id MongodbatlasSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path where MongoDB Atlas secret backend is mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#mount MongodbatlasSecretBackend#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#namespace MongodbatlasSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * The Private Programmatic API Key used to connect with MongoDB Atlas API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#private_key MongodbatlasSecretBackend#private_key}
  */
  readonly privateKey?: string;
  /**
  * The Private Programmatic API Key used to connect with MongoDB Atlas API. This is a write-only field that is not stored in state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#private_key_wo MongodbatlasSecretBackend#private_key_wo}
  */
  readonly privateKeyWo?: string;
  /**
  * Incrementing version counter for the private_key_wo field. Increment to force an update to the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#private_key_wo_version MongodbatlasSecretBackend#private_key_wo_version}
  */
  readonly privateKeyWoVersion?: number;
  /**
  * The Public Programmatic API Key used to authenticate with the MongoDB Atlas API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#public_key MongodbatlasSecretBackend#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend vault_mongodbatlas_secret_backend}
*/
export class MongodbatlasSecretBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_mongodbatlas_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MongodbatlasSecretBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbatlasSecretBackend to import
  * @param importFromId The id of the existing MongodbatlasSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbatlasSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_mongodbatlas_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/mongodbatlas_secret_backend vault_mongodbatlas_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbatlasSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbatlasSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_mongodbatlas_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
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
    this._id = config.id;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._privateKey = config.privateKey;
    this._privateKeyWo = config.privateKeyWo;
    this._privateKeyWoVersion = config.privateKeyWoVersion;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_wo - computed: false, optional: true, required: false
  private _privateKeyWo?: string; 
  public get privateKeyWo() {
    return this.getStringAttribute('private_key_wo');
  }
  public set privateKeyWo(value: string) {
    this._privateKeyWo = value;
  }
  public resetPrivateKeyWo() {
    this._privateKeyWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoInput() {
    return this._privateKeyWo;
  }

  // private_key_wo_version - computed: false, optional: true, required: false
  private _privateKeyWoVersion?: number; 
  public get privateKeyWoVersion() {
    return this.getNumberAttribute('private_key_wo_version');
  }
  public set privateKeyWoVersion(value: number) {
    this._privateKeyWoVersion = value;
  }
  public resetPrivateKeyWoVersion() {
    this._privateKeyWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyWoVersionInput() {
    return this._privateKeyWoVersion;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      private_key: cdktn.stringToTerraform(this._privateKey),
      private_key_wo: cdktn.stringToTerraform(this._privateKeyWo),
      private_key_wo_version: cdktn.numberToTerraform(this._privateKeyWoVersion),
      public_key: cdktn.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      private_key: {
        value: cdktn.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_wo: {
        value: cdktn.stringToHclTerraform(this._privateKeyWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_wo_version: {
        value: cdktn.numberToHclTerraform(this._privateKeyWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_key: {
        value: cdktn.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
