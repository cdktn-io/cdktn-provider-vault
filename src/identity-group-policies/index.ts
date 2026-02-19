/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface IdentityGroupPoliciesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#exclusive IdentityGroupPolicies#exclusive}
  */
  readonly exclusive?: boolean | cdktn.IResolvable;
  /**
  * ID of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#group_id IdentityGroupPolicies#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#id IdentityGroupPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#namespace IdentityGroupPolicies#namespace}
  */
  readonly namespace?: string;
  /**
  * Policies to be tied to the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#policies IdentityGroupPolicies#policies}
  */
  readonly policies: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies vault_identity_group_policies}
*/
export class IdentityGroupPolicies extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a IdentityGroupPolicies resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityGroupPolicies to import
  * @param importFromId The id of the existing IdentityGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/identity_group_policies vault_identity_group_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_group_policies',
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
    this._exclusive = config.exclusive;
    this._groupId = config.groupId;
    this._id = config.id;
    this._namespace = config.namespace;
    this._policies = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclusive - computed: false, optional: true, required: false
  private _exclusive?: boolean | cdktn.IResolvable; 
  public get exclusive() {
    return this.getBooleanAttribute('exclusive');
  }
  public set exclusive(value: boolean | cdktn.IResolvable) {
    this._exclusive = value;
  }
  public resetExclusive() {
    this._exclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveInput() {
    return this._exclusive;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
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

  // policies - computed: false, optional: false, required: true
  private _policies?: string[]; 
  public get policies() {
    return cdktn.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclusive: cdktn.booleanToTerraform(this._exclusive),
      group_id: cdktn.stringToTerraform(this._groupId),
      id: cdktn.stringToTerraform(this._id),
      namespace: cdktn.stringToTerraform(this._namespace),
      policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._policies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclusive: {
        value: cdktn.booleanToHclTerraform(this._exclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktn.stringToHclTerraform(this._groupId),
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
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
