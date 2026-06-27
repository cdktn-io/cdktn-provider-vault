/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface KeymgmtKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies if the key is allowed to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#deletion_allowed KeymgmtKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * Specifies the minimum enabled version of the key. All versions of the key less than the specified version will be disabled for cryptographic operations in the KMS provider that the key has been distributed to. Setting this value to 0 means that all versions will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#min_enabled_version KeymgmtKey#min_enabled_version}
  */
  readonly minEnabledVersion?: number;
  /**
  * Path of the Key Management secrets engine mount. Must match the `path` of a `vault_mount` resource with `type = "keymgmt"`. Use `vault_mount.keymgmt.path` here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#mount KeymgmtKey#mount}
  */
  readonly mount: string;
  /**
  * Specifies the name of the key to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#name KeymgmtKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#namespace KeymgmtKey#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the regions in which the key should be replicated. Supported only for AWS KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#replica_regions KeymgmtKey#replica_regions}
  */
  readonly replicaRegions?: string[];
  /**
  * Specifies the type of cryptographic key to create. aes256-gcm96, rsa-2048, rsa-3072, rsa-4096, ecdsa-p256, ecdsa-p384, ecdsa-p521 key types are supported. Defaults to `rsa-2048`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#type KeymgmtKey#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key vault_keymgmt_key}
*/
export class KeymgmtKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_keymgmt_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a KeymgmtKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeymgmtKey to import
  * @param importFromId The id of the existing KeymgmtKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeymgmtKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_keymgmt_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/keymgmt_key vault_keymgmt_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeymgmtKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeymgmtKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_keymgmt_key',
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
    this._deletionAllowed = config.deletionAllowed;
    this._minEnabledVersion = config.minEnabledVersion;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._replicaRegions = config.replicaRegions;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_allowed - computed: false, optional: true, required: false
  private _deletionAllowed?: boolean | cdktn.IResolvable; 
  public get deletionAllowed() {
    return this.getBooleanAttribute('deletion_allowed');
  }
  public set deletionAllowed(value: boolean | cdktn.IResolvable) {
    this._deletionAllowed = value;
  }
  public resetDeletionAllowed() {
    this._deletionAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionAllowedInput() {
    return this._deletionAllowed;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // min_enabled_version - computed: true, optional: true, required: false
  private _minEnabledVersion?: number; 
  public get minEnabledVersion() {
    return this.getNumberAttribute('min_enabled_version');
  }
  public set minEnabledVersion(value: number) {
    this._minEnabledVersion = value;
  }
  public resetMinEnabledVersion() {
    this._minEnabledVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEnabledVersionInput() {
    return this._minEnabledVersion;
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

  // replica_regions - computed: false, optional: true, required: false
  private _replicaRegions?: string[]; 
  public get replicaRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('replica_regions'));
  }
  public set replicaRegions(value: string[]) {
    this._replicaRegions = value;
  }
  public resetReplicaRegions() {
    this._replicaRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaRegionsInput() {
    return this._replicaRegions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      min_enabled_version: cdktn.numberToTerraform(this._minEnabledVersion),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      replica_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._replicaRegions),
      type: cdktn.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_allowed: {
        value: cdktn.booleanToHclTerraform(this._deletionAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_enabled_version: {
        value: cdktn.numberToHclTerraform(this._minEnabledVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      replica_regions: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._replicaRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
