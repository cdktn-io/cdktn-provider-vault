/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KeymgmtGcpKmsConfig extends cdktn.TerraformMetaArguments {
  /**
  * The credentials to use for authentication with Google Cloud KMS. Supplying values for this parameter is optional, as credentials may also be specified through environment variables or Application Default Credentials. The order of precedence is environment variables, then the credentials provided to this parameter and Application Default Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#credentials_wo KeymgmtGcpKms#credentials_wo}
  */
  readonly credentialsWo?: { [key: string]: string };
  /**
  * Version counter for the write-only `credentials_wo` field. Since write-only values are not stored in state, Terraform cannot detect when credentials change. Increment this value whenever you update `credentials_wo` to ensure the new credentials are sent to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#credentials_wo_version KeymgmtGcpKms#credentials_wo_version}
  */
  readonly credentialsWoVersion?: number;
  /**
  * Refers to the resource ID of an existing GCP Cloud KMS key ring. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#key_collection KeymgmtGcpKms#key_collection}
  */
  readonly keyCollection: string;
  /**
  * Path of the Key Management secrets engine mount. Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#mount KeymgmtGcpKms#mount}
  */
  readonly mount: string;
  /**
  * Specifies the name of the GCP Cloud KMS provider. Cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#name KeymgmtGcpKms#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#namespace KeymgmtGcpKms#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms vault_keymgmt_gcp_kms}
*/
export class KeymgmtGcpKms extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_keymgmt_gcp_kms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KeymgmtGcpKms resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeymgmtGcpKms to import
  * @param importFromId The id of the existing KeymgmtGcpKms that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeymgmtGcpKms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_keymgmt_gcp_kms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_gcp_kms vault_keymgmt_gcp_kms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeymgmtGcpKmsConfig
  */
  public constructor(scope: Construct, id: string, config: KeymgmtGcpKmsConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_keymgmt_gcp_kms',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
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
    this._credentialsWo = config.credentialsWo;
    this._credentialsWoVersion = config.credentialsWoVersion;
    this._keyCollection = config.keyCollection;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_wo - computed: false, optional: true, required: false
  private _credentialsWo?: { [key: string]: string }; 
  public get credentialsWo() {
    return this.getStringMapAttribute('credentials_wo');
  }
  public set credentialsWo(value: { [key: string]: string }) {
    this._credentialsWo = value;
  }
  public resetCredentialsWo() {
    this._credentialsWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsWoInput() {
    return this._credentialsWo;
  }

  // credentials_wo_version - computed: false, optional: true, required: false
  private _credentialsWoVersion?: number; 
  public get credentialsWoVersion() {
    return this.getNumberAttribute('credentials_wo_version');
  }
  public set credentialsWoVersion(value: number) {
    this._credentialsWoVersion = value;
  }
  public resetCredentialsWoVersion() {
    this._credentialsWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsWoVersionInput() {
    return this._credentialsWoVersion;
  }

  // key_collection - computed: false, optional: false, required: true
  private _keyCollection?: string; 
  public get keyCollection() {
    return this.getStringAttribute('key_collection');
  }
  public set keyCollection(value: string) {
    this._keyCollection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCollectionInput() {
    return this._keyCollection;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_wo: cdktn.hashMapper(cdktn.stringToTerraform)(this._credentialsWo),
      credentials_wo_version: cdktn.numberToTerraform(this._credentialsWoVersion),
      key_collection: cdktn.stringToTerraform(this._keyCollection),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_wo: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._credentialsWo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      credentials_wo_version: {
        value: cdktn.numberToHclTerraform(this._credentialsWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_collection: {
        value: cdktn.stringToHclTerraform(this._keyCollection),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
