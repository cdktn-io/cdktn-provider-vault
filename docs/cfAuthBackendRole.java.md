# `cfAuthBackendRole` Submodule <a name="`cfAuthBackendRole` Submodule" id="@cdktn/provider-vault.cfAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfAuthBackendRole <a name="CfAuthBackendRole" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role vault_cf_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRole;

CfAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .boundApplicationIds(java.util.List<java.lang.String>)
//  .boundInstanceIds(java.util.List<java.lang.String>)
//  .boundOrganizationIds(java.util.List<java.lang.String>)
//  .boundSpaceIds(java.util.List<java.lang.String>)
//  .disableIpMatching(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the CF auth role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundApplicationIds">boundApplicationIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of application IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundInstanceIds">boundInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of instance IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundOrganizationIds">boundOrganizationIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of organization IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundSpaceIds">boundSpaceIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of space IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.disableIpMatching">disableIpMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#mount CfAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the CF auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#name CfAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.aliasMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#alias_metadata CfAuthBackendRole#alias_metadata}

---

##### `boundApplicationIds`<sup>Optional</sup> <a name="boundApplicationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundApplicationIds"></a>

- *Type:* java.util.List<java.lang.String>

An optional set of application IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_application_ids CfAuthBackendRole#bound_application_ids}

---

##### `boundInstanceIds`<sup>Optional</sup> <a name="boundInstanceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundInstanceIds"></a>

- *Type:* java.util.List<java.lang.String>

An optional set of instance IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_instance_ids CfAuthBackendRole#bound_instance_ids}

---

##### `boundOrganizationIds`<sup>Optional</sup> <a name="boundOrganizationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundOrganizationIds"></a>

- *Type:* java.util.List<java.lang.String>

An optional set of organization IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_organization_ids CfAuthBackendRole#bound_organization_ids}

---

##### `boundSpaceIds`<sup>Optional</sup> <a name="boundSpaceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.boundSpaceIds"></a>

- *Type:* java.util.List<java.lang.String>

An optional set of space IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_space_ids CfAuthBackendRole#bound_space_ids}

---

##### `disableIpMatching`<sup>Optional</sup> <a name="disableIpMatching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.disableIpMatching"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate.

Defaults to `false`. To reset to the default, omit this field from config rather than setting it to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#disable_ip_matching CfAuthBackendRole#disable_ip_matching}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#namespace CfAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_bound_cidrs CfAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_explicit_max_ttl CfAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_max_ttl CfAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_no_default_policy CfAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_num_uses CfAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_period CfAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_policies CfAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_ttl CfAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_type CfAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundApplicationIds">resetBoundApplicationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundInstanceIds">resetBoundInstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundOrganizationIds">resetBoundOrganizationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundSpaceIds">resetBoundSpaceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetDisableIpMatching">resetDisableIpMatching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetAliasMetadata"></a>

```java
public void resetAliasMetadata()
```

##### `resetBoundApplicationIds` <a name="resetBoundApplicationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundApplicationIds"></a>

```java
public void resetBoundApplicationIds()
```

##### `resetBoundInstanceIds` <a name="resetBoundInstanceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundInstanceIds"></a>

```java
public void resetBoundInstanceIds()
```

##### `resetBoundOrganizationIds` <a name="resetBoundOrganizationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundOrganizationIds"></a>

```java
public void resetBoundOrganizationIds()
```

##### `resetBoundSpaceIds` <a name="resetBoundSpaceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetBoundSpaceIds"></a>

```java
public void resetBoundSpaceIds()
```

##### `resetDisableIpMatching` <a name="resetDisableIpMatching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetDisableIpMatching"></a>

```java
public void resetDisableIpMatching()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CfAuthBackendRole resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isConstruct"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRole;

CfAuthBackendRole.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRole;

CfAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRole;

CfAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRole;

CfAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CfAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CfAuthBackendRole resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CfAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CfAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CfAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIdsInput">boundApplicationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIdsInput">boundInstanceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIdsInput">boundOrganizationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIdsInput">boundSpaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatchingInput">disableIpMatchingInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIds">boundApplicationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIds">boundInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIds">boundOrganizationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIds">boundSpaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatching">disableIpMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundApplicationIdsInput`<sup>Optional</sup> <a name="boundApplicationIdsInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundApplicationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundInstanceIdsInput`<sup>Optional</sup> <a name="boundInstanceIdsInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundOrganizationIdsInput`<sup>Optional</sup> <a name="boundOrganizationIdsInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundOrganizationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSpaceIdsInput`<sup>Optional</sup> <a name="boundSpaceIdsInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundSpaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableIpMatchingInput`<sup>Optional</sup> <a name="disableIpMatchingInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatchingInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableIpMatchingInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundApplicationIds`<sup>Required</sup> <a name="boundApplicationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundApplicationIds"></a>

```java
public java.util.List<java.lang.String> getBoundApplicationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundInstanceIds`<sup>Required</sup> <a name="boundInstanceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundInstanceIds"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundOrganizationIds`<sup>Required</sup> <a name="boundOrganizationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundOrganizationIds"></a>

```java
public java.util.List<java.lang.String> getBoundOrganizationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSpaceIds`<sup>Required</sup> <a name="boundSpaceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.boundSpaceIds"></a>

```java
public java.util.List<java.lang.String> getBoundSpaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disableIpMatching`<sup>Required</sup> <a name="disableIpMatching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.disableIpMatching"></a>

```java
public java.lang.Boolean|IResolvable getDisableIpMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CfAuthBackendRoleConfig <a name="CfAuthBackendRoleConfig" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.cf_auth_backend_role.CfAuthBackendRoleConfig;

CfAuthBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .boundApplicationIds(java.util.List<java.lang.String>)
//  .boundInstanceIds(java.util.List<java.lang.String>)
//  .boundOrganizationIds(java.util.List<java.lang.String>)
//  .boundSpaceIds(java.util.List<java.lang.String>)
//  .disableIpMatching(java.lang.Boolean|IResolvable)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the CF auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the CF auth role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundApplicationIds">boundApplicationIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of application IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundInstanceIds">boundInstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of instance IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundOrganizationIds">boundOrganizationIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of organization IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundSpaceIds">boundSpaceIds</a></code> | <code>java.util.List<java.lang.String></code> | An optional set of space IDs an instance must be a member of to qualify for this role. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.disableIpMatching">disableIpMatching</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the CF auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#mount CfAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the CF auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#name CfAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#alias_metadata CfAuthBackendRole#alias_metadata}

---

##### `boundApplicationIds`<sup>Optional</sup> <a name="boundApplicationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundApplicationIds"></a>

```java
public java.util.List<java.lang.String> getBoundApplicationIds();
```

- *Type:* java.util.List<java.lang.String>

An optional set of application IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_application_ids CfAuthBackendRole#bound_application_ids}

---

##### `boundInstanceIds`<sup>Optional</sup> <a name="boundInstanceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundInstanceIds"></a>

```java
public java.util.List<java.lang.String> getBoundInstanceIds();
```

- *Type:* java.util.List<java.lang.String>

An optional set of instance IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_instance_ids CfAuthBackendRole#bound_instance_ids}

---

##### `boundOrganizationIds`<sup>Optional</sup> <a name="boundOrganizationIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundOrganizationIds"></a>

```java
public java.util.List<java.lang.String> getBoundOrganizationIds();
```

- *Type:* java.util.List<java.lang.String>

An optional set of organization IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_organization_ids CfAuthBackendRole#bound_organization_ids}

---

##### `boundSpaceIds`<sup>Optional</sup> <a name="boundSpaceIds" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.boundSpaceIds"></a>

```java
public java.util.List<java.lang.String> getBoundSpaceIds();
```

- *Type:* java.util.List<java.lang.String>

An optional set of space IDs an instance must be a member of to qualify for this role.

To clear this constraint, omit the field entirely rather than setting it to an empty list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#bound_space_ids CfAuthBackendRole#bound_space_ids}

---

##### `disableIpMatching`<sup>Optional</sup> <a name="disableIpMatching" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.disableIpMatching"></a>

```java
public java.lang.Boolean|IResolvable getDisableIpMatching();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate.

Defaults to `false`. To reset to the default, omit this field from config rather than setting it to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#disable_ip_matching CfAuthBackendRole#disable_ip_matching}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#namespace CfAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_bound_cidrs CfAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_explicit_max_ttl CfAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_max_ttl CfAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_no_default_policy CfAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_num_uses CfAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_period CfAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_policies CfAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_ttl CfAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktn/provider-vault.cfAuthBackendRole.CfAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.9.0/docs/resources/cf_auth_backend_role#token_type CfAuthBackendRole#token_type}

---



