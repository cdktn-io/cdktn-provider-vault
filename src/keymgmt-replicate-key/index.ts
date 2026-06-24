/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KeymgmtReplicateKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the name of the key to replicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key#key_name KeymgmtReplicateKey#key_name}
  */
  readonly keyName: string;
  /**
  * Specifies the name of the AWS KMS provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key#kms_name KeymgmtReplicateKey#kms_name}
  */
  readonly kmsName: string;
  /**
  * Path of the Key Management secrets engine mount. Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key#mount KeymgmtReplicateKey#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key#namespace KeymgmtReplicateKey#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key vault_keymgmt_replicate_key}
*/
export class KeymgmtReplicateKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_keymgmt_replicate_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KeymgmtReplicateKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeymgmtReplicateKey to import
  * @param importFromId The id of the existing KeymgmtReplicateKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeymgmtReplicateKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_keymgmt_replicate_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/keymgmt_replicate_key vault_keymgmt_replicate_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeymgmtReplicateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeymgmtReplicateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_keymgmt_replicate_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.0',
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
    this._keyName = config.keyName;
    this._kmsName = config.kmsName;
    this._mount = config.mount;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // kms_name - computed: false, optional: false, required: true
  private _kmsName?: string; 
  public get kmsName() {
    return this.getStringAttribute('kms_name');
  }
  public set kmsName(value: string) {
    this._kmsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsNameInput() {
    return this._kmsName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_name: cdktn.stringToTerraform(this._keyName),
      kms_name: cdktn.stringToTerraform(this._kmsName),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_name: {
        value: cdktn.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_name: {
        value: cdktn.stringToHclTerraform(this._kmsName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
