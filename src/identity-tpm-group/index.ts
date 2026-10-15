/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IdentityTpmGroupConfig extends cdktn.TerraformMetaArguments {
  /**
  * Set of TPM IDs that are members of this TPM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group#member_tpm_ids IdentityTpmGroup#member_tpm_ids}
  */
  readonly memberTpmIds?: string[];
  /**
  * Metadata to associate with the TPM group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group#metadata IdentityTpmGroup#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name of the TPM group. Vault generates a name if one is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group#name IdentityTpmGroup#name}
  */
  readonly name?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group#namespace IdentityTpmGroup#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group vault_identity_tpm_group}
*/
export class IdentityTpmGroup extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_tpm_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IdentityTpmGroup resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityTpmGroup to import
  * @param importFromId The id of the existing IdentityTpmGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityTpmGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_tpm_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/identity_tpm_group vault_identity_tpm_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityTpmGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IdentityTpmGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_tpm_group',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.13.0',
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
    this._memberTpmIds = config.memberTpmIds;
    this._metadata = config.metadata;
    this._name = config.name;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // member_tpm_ids - computed: false, optional: true, required: false
  private _memberTpmIds?: string[]; 
  public get memberTpmIds() {
    return cdktn.Fn.tolist(this.getListAttribute('member_tpm_ids'));
  }
  public set memberTpmIds(value: string[]) {
    this._memberTpmIds = value;
  }
  public resetMemberTpmIds() {
    this._memberTpmIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTpmIdsInput() {
    return this._memberTpmIds;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // tpm_group_id - computed: true, optional: false, required: false
  public get tpmGroupId() {
    return this.getStringAttribute('tpm_group_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member_tpm_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._memberTpmIds),
      metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      member_tpm_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._memberTpmIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
