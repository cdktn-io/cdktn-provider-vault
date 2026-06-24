/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ConfigGroupPolicyApplicationConfig extends cdktn.TerraformMetaArguments {
  /**
  * Mode for group policy application. Must be either "within_namespace_hierarchy" or "any". "within_namespace_hierarchy" means policies only apply when the token authorizing a request was created in the same namespace as the group, or a descendant namespace. "any" means group policies apply to all members of a group, regardless of what namespace the request token came from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#group_policy_application_mode ConfigGroupPolicyApplication#group_policy_application_mode}
  */
  readonly groupPolicyApplicationMode: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#namespace ConfigGroupPolicyApplication#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application vault_config_group_policy_application}
*/
export class ConfigGroupPolicyApplication extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_config_group_policy_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ConfigGroupPolicyApplication resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigGroupPolicyApplication to import
  * @param importFromId The id of the existing ConfigGroupPolicyApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigGroupPolicyApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_config_group_policy_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.0/docs/resources/config_group_policy_application vault_config_group_policy_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigGroupPolicyApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigGroupPolicyApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_config_group_policy_application',
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
    this._groupPolicyApplicationMode = config.groupPolicyApplicationMode;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_policy_application_mode - computed: false, optional: false, required: true
  private _groupPolicyApplicationMode?: string; 
  public get groupPolicyApplicationMode() {
    return this.getStringAttribute('group_policy_application_mode');
  }
  public set groupPolicyApplicationMode(value: string) {
    this._groupPolicyApplicationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPolicyApplicationModeInput() {
    return this._groupPolicyApplicationMode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      group_policy_application_mode: cdktn.stringToTerraform(this._groupPolicyApplicationMode),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_policy_application_mode: {
        value: cdktn.stringToHclTerraform(this._groupPolicyApplicationMode),
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
