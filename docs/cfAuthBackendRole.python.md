# `cfAuthBackendRole` Submodule <a name="`cfAuthBackendRole` Submodule" id="@cdktn/provider-vault.cfAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendRole <a name="CfAuthBackendRole" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role vault_cf_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  alias_metadata: typing.Mapping[str] = None,
  bound_application_ids: typing.List[str] = None,
  bound_instance_ids: typing.List[str] = None,
  bound_organization_ids: typing.List[str] = None,
  bound_space_ids: typing.List[str] = None,
  disable_ip_matching: bool | IResolvable = None,
  namespace: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the CF auth role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundApplicationIds">bound_application_ids</a></code> | <code>typing.List[str]</code> | An optional set of application IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundInstanceIds">bound_instance_ids</a></code> | <code>typing.List[str]</code> | An optional set of instance IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundOrganizationIds">bound_organization_ids</a></code> | <code>typing.List[str]</code> | An optional set of organization IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundSpaceIds">bound_space_ids</a></code> | <code>typing.List[str]</code> | An optional set of space IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.disableIpMatching">disable_ip_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#mount CfAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Name of the CF auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#name CfAuthBackendRole#name}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.aliasMetadata"></a>

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#alias_metadata CfAuthBackendRole#alias_metadata}

---

##### `bound_application_ids`<sup>Optional</sup> <a name="bound_application_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundApplicationIds"></a>

- *Type:* typing.List[str]

An optional set of application IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_application_ids CfAuthBackendRole#bound_application_ids}

---

##### `bound_instance_ids`<sup>Optional</sup> <a name="bound_instance_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundInstanceIds"></a>

- *Type:* typing.List[str]

An optional set of instance IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_instance_ids CfAuthBackendRole#bound_instance_ids}

---

##### `bound_organization_ids`<sup>Optional</sup> <a name="bound_organization_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundOrganizationIds"></a>

- *Type:* typing.List[str]

An optional set of organization IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_organization_ids CfAuthBackendRole#bound_organization_ids}

---

##### `bound_space_ids`<sup>Optional</sup> <a name="bound_space_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundSpaceIds"></a>

- *Type:* typing.List[str]

An optional set of space IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_space_ids CfAuthBackendRole#bound_space_ids}

---

##### `disable_ip_matching`<sup>Optional</sup> <a name="disable_ip_matching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.disableIpMatching"></a>

- *Type:* bool | cdktn.IResolvable

If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate.

Defaults to `false`. To reset to the default, omit this field from config rather than setting it to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#disable_ip_matching CfAuthBackendRole#disable_ip_matching}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#namespace CfAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_bound_cidrs CfAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_explicit_max_ttl CfAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_max_ttl CfAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_no_default_policy CfAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_num_uses CfAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_period CfAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_policies CfAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_ttl CfAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_type CfAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetAliasMetadata">reset_alias_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundApplicationIds">reset_bound_application_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundInstanceIds">reset_bound_instance_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundOrganizationIds">reset_bound_organization_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundSpaceIds">reset_bound_space_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetDisableIpMatching">reset_disable_ip_matching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alias_metadata` <a name="reset_alias_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetAliasMetadata"></a>

```python
def reset_alias_metadata() -> None
```

##### `reset_bound_application_ids` <a name="reset_bound_application_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundApplicationIds"></a>

```python
def reset_bound_application_ids() -> None
```

##### `reset_bound_instance_ids` <a name="reset_bound_instance_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundInstanceIds"></a>

```python
def reset_bound_instance_ids() -> None
```

##### `reset_bound_organization_ids` <a name="reset_bound_organization_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundOrganizationIds"></a>

```python
def reset_bound_organization_ids() -> None
```

##### `reset_bound_space_ids` <a name="reset_bound_space_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundSpaceIds"></a>

```python
def reset_bound_space_ids() -> None
```

##### `reset_disable_ip_matching` <a name="reset_disable_ip_matching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetDisableIpMatching"></a>

```python
def reset_disable_ip_matching() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CfAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isConstruct"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRole.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CfAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfAuthBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadataInput">alias_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIdsInput">bound_application_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIdsInput">bound_instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIdsInput">bound_organization_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIdsInput">bound_space_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatchingInput">disable_ip_matching_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIds">bound_application_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIds">bound_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIds">bound_organization_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIds">bound_space_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatching">disable_ip_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `alias_metadata_input`<sup>Optional</sup> <a name="alias_metadata_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadataInput"></a>

```python
alias_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bound_application_ids_input`<sup>Optional</sup> <a name="bound_application_ids_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIdsInput"></a>

```python
bound_application_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_instance_ids_input`<sup>Optional</sup> <a name="bound_instance_ids_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIdsInput"></a>

```python
bound_instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_organization_ids_input`<sup>Optional</sup> <a name="bound_organization_ids_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIdsInput"></a>

```python
bound_organization_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_space_ids_input`<sup>Optional</sup> <a name="bound_space_ids_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIdsInput"></a>

```python
bound_space_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_ip_matching_input`<sup>Optional</sup> <a name="disable_ip_matching_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatchingInput"></a>

```python
disable_ip_matching_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `alias_metadata`<sup>Required</sup> <a name="alias_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `bound_application_ids`<sup>Required</sup> <a name="bound_application_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIds"></a>

```python
bound_application_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_instance_ids`<sup>Required</sup> <a name="bound_instance_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIds"></a>

```python
bound_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_organization_ids`<sup>Required</sup> <a name="bound_organization_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIds"></a>

```python
bound_organization_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_space_ids`<sup>Required</sup> <a name="bound_space_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIds"></a>

```python
bound_space_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_ip_matching`<sup>Required</sup> <a name="disable_ip_matching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatching"></a>

```python
disable_ip_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendRoleConfig <a name="CfAuthBackendRoleConfig" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.Initializer"></a>

```python
from cdktn_provider_vault import cf_auth_backend_role

cfAuthBackendRole.CfAuthBackendRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  name: str,
  alias_metadata: typing.Mapping[str] = None,
  bound_application_ids: typing.List[str] = None,
  bound_instance_ids: typing.List[str] = None,
  bound_organization_ids: typing.List[str] = None,
  bound_space_ids: typing.List[str] = None,
  disable_ip_matching: bool | IResolvable = None,
  namespace: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: bool | IResolvable = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Name of the CF auth role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.aliasMetadata">alias_metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundApplicationIds">bound_application_ids</a></code> | <code>typing.List[str]</code> | An optional set of application IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundInstanceIds">bound_instance_ids</a></code> | <code>typing.List[str]</code> | An optional set of instance IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundOrganizationIds">bound_organization_ids</a></code> | <code>typing.List[str]</code> | An optional set of organization IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundSpaceIds">bound_space_ids</a></code> | <code>typing.List[str]</code> | An optional set of space IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.disableIpMatching">disable_ip_matching</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#mount CfAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the CF auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#name CfAuthBackendRole#name}

---

##### `alias_metadata`<sup>Optional</sup> <a name="alias_metadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.aliasMetadata"></a>

```python
alias_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#alias_metadata CfAuthBackendRole#alias_metadata}

---

##### `bound_application_ids`<sup>Optional</sup> <a name="bound_application_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundApplicationIds"></a>

```python
bound_application_ids: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of application IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_application_ids CfAuthBackendRole#bound_application_ids}

---

##### `bound_instance_ids`<sup>Optional</sup> <a name="bound_instance_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundInstanceIds"></a>

```python
bound_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of instance IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_instance_ids CfAuthBackendRole#bound_instance_ids}

---

##### `bound_organization_ids`<sup>Optional</sup> <a name="bound_organization_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundOrganizationIds"></a>

```python
bound_organization_ids: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of organization IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_organization_ids CfAuthBackendRole#bound_organization_ids}

---

##### `bound_space_ids`<sup>Optional</sup> <a name="bound_space_ids" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundSpaceIds"></a>

```python
bound_space_ids: typing.List[str]
```

- *Type:* typing.List[str]

An optional set of space IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_space_ids CfAuthBackendRole#bound_space_ids}

---

##### `disable_ip_matching`<sup>Optional</sup> <a name="disable_ip_matching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.disableIpMatching"></a>

```python
disable_ip_matching: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate.

Defaults to `false`. To reset to the default, omit this field from config rather than setting it to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#disable_ip_matching CfAuthBackendRole#disable_ip_matching}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#namespace CfAuthBackendRole#namespace}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_bound_cidrs CfAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_explicit_max_ttl CfAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_max_ttl CfAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_no_default_policy CfAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_num_uses CfAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_period CfAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_policies CfAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_ttl CfAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_type CfAuthBackendRole#token_type}

---



