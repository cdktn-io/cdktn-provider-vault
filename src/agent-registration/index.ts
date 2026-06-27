/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AgentRegistrationConfig extends cdktn.TerraformMetaArguments {
  /**
  * List of policy identifiers that define the authorization ceiling for this agent. Cannot include 'root' policy. Note: Vault automatically adds default policies (['default', 'default-ceiling']) unless no_default_ceiling_policy is true, but these are filtered out when reading the state to match your configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#ceiling_policies AgentRegistration#ceiling_policies}
  */
  readonly ceilingPolicies?: string[];
  /**
  * Detailed description of the agent's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#description AgentRegistration#description}
  */
  readonly description?: string;
  /**
  * Human-readable name for the agent registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#display_name AgentRegistration#display_name}
  */
  readonly displayName: string;
  /**
  * Entity ID representing this agent. Each entity can only have one registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#entity_id AgentRegistration#entity_id}
  */
  readonly entityId: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#namespace AgentRegistration#namespace}
  */
  readonly namespace?: string;
  /**
  * If true, opts out of automatically adding the default-ceiling policy to this agent registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#no_default_ceiling_policy AgentRegistration#no_default_ceiling_policy}
  */
  readonly noDefaultCeilingPolicy?: boolean | cdktn.IResolvable;
  /**
  * When false, RAR (Rich Authorization Requests) is mandatory and authorization_details must be present in the token. When set to true, authorization_details in the JWT token are optional for this agent. This setting works in conjunction with the OAuth Resource Server profile's optional_authorization_details setting - RAR is optional if EITHER is true. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#optional_authorization_details AgentRegistration#optional_authorization_details}
  */
  readonly optionalAuthorizationDetails?: boolean | cdktn.IResolvable;
  /**
  * Owner of the agent registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#owner AgentRegistration#owner}
  */
  readonly owner?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration}
*/
export class AgentRegistration extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_agent_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AgentRegistration resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AgentRegistration to import
  * @param importFromId The id of the existing AgentRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AgentRegistration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_agent_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/resources/agent_registration vault_agent_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AgentRegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: AgentRegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_agent_registration',
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
    this._ceilingPolicies = config.ceilingPolicies;
    this._description = config.description;
    this._displayName = config.displayName;
    this._entityId = config.entityId;
    this._namespace = config.namespace;
    this._noDefaultCeilingPolicy = config.noDefaultCeilingPolicy;
    this._optionalAuthorizationDetails = config.optionalAuthorizationDetails;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ceiling_policies - computed: true, optional: true, required: false
  private _ceilingPolicies?: string[]; 
  public get ceilingPolicies() {
    return this.getListAttribute('ceiling_policies');
  }
  public set ceilingPolicies(value: string[]) {
    this._ceilingPolicies = value;
  }
  public resetCeilingPolicies() {
    this._ceilingPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceilingPoliciesInput() {
    return this._ceilingPolicies;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_time - computed: true, optional: false, required: false
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
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

  // no_default_ceiling_policy - computed: true, optional: true, required: false
  private _noDefaultCeilingPolicy?: boolean | cdktn.IResolvable; 
  public get noDefaultCeilingPolicy() {
    return this.getBooleanAttribute('no_default_ceiling_policy');
  }
  public set noDefaultCeilingPolicy(value: boolean | cdktn.IResolvable) {
    this._noDefaultCeilingPolicy = value;
  }
  public resetNoDefaultCeilingPolicy() {
    this._noDefaultCeilingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultCeilingPolicyInput() {
    return this._noDefaultCeilingPolicy;
  }

  // optional_authorization_details - computed: true, optional: true, required: false
  private _optionalAuthorizationDetails?: boolean | cdktn.IResolvable; 
  public get optionalAuthorizationDetails() {
    return this.getBooleanAttribute('optional_authorization_details');
  }
  public set optionalAuthorizationDetails(value: boolean | cdktn.IResolvable) {
    this._optionalAuthorizationDetails = value;
  }
  public resetOptionalAuthorizationDetails() {
    this._optionalAuthorizationDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalAuthorizationDetailsInput() {
    return this._optionalAuthorizationDetails;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ceiling_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._ceilingPolicies),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      entity_id: cdktn.stringToTerraform(this._entityId),
      namespace: cdktn.stringToTerraform(this._namespace),
      no_default_ceiling_policy: cdktn.booleanToTerraform(this._noDefaultCeilingPolicy),
      optional_authorization_details: cdktn.booleanToTerraform(this._optionalAuthorizationDetails),
      owner: cdktn.stringToTerraform(this._owner),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ceiling_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._ceilingPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktn.stringToHclTerraform(this._entityId),
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
      no_default_ceiling_policy: {
        value: cdktn.booleanToHclTerraform(this._noDefaultCeilingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      optional_authorization_details: {
        value: cdktn.booleanToHclTerraform(this._optionalAuthorizationDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      owner: {
        value: cdktn.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
