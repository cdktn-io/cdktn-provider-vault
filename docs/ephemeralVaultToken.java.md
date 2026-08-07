# `ephemeralVaultToken` Submodule <a name="`ephemeralVaultToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultToken <a name="EphemeralVaultToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_token.EphemeralVaultToken;

EphemeralVaultToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .displayName(java.lang.String)
//  .entityAlias(java.lang.String)
//  .explicitMaxTtl(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean|IResolvable)
//  .noParent(java.lang.Boolean|IResolvable)
//  .numUses(java.lang.Number)
//  .period(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .renewable(java.lang.Boolean|IResolvable)
//  .roleName(java.lang.String)
//  .ttl(java.lang.String)
//  .type(java.lang.String)
//  .wrappingTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.entityAlias">entityAlias</a></code> | <code>java.lang.String</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noParent">noParent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.renewable">renewable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL period of the wrapped token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `entityAlias`<sup>Optional</sup> <a name="entityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.entityAlias"></a>

- *Type:* java.lang.String

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.explicitMaxTtl"></a>

- *Type:* java.lang.String

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.noParent"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.numUses"></a>

- *Type:* java.lang.Number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.renewable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.wrappingTtl"></a>

- *Type:* java.lang.String

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias">resetEntityAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl">resetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent">resetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl">resetWrappingTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEntityAlias` <a name="resetEntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias"></a>

```java
public void resetEntityAlias()
```

##### `resetExplicitMaxTtl` <a name="resetExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl"></a>

```java
public void resetExplicitMaxTtl()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy"></a>

```java
public void resetNoDefaultPolicy()
```

##### `resetNoParent` <a name="resetNoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent"></a>

```java
public void resetNoParent()
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses"></a>

```java
public void resetNumUses()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable"></a>

```java
public void resetRenewable()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType"></a>

```java
public void resetType()
```

##### `resetWrappingTtl` <a name="resetWrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl"></a>

```java
public void resetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_token.EphemeralVaultToken;

EphemeralVaultToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_token.EphemeralVaultToken;

EphemeralVaultToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_token.EphemeralVaultToken;

EphemeralVaultToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan">orphan</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken">wrappedToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor">wrappingAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput">entityAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput">explicitMaxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput">noParentInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput">numUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput">renewableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput">wrappingTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias">entityAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent">noParent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable">renewable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan"></a>

```java
public IResolvable getOrphan();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `wrappedToken`<sup>Required</sup> <a name="wrappedToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken"></a>

```java
public java.lang.String getWrappedToken();
```

- *Type:* java.lang.String

---

##### `wrappingAccessor`<sup>Required</sup> <a name="wrappingAccessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor"></a>

```java
public java.lang.String getWrappingAccessor();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `entityAliasInput`<sup>Optional</sup> <a name="entityAliasInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput"></a>

```java
public java.lang.String getEntityAliasInput();
```

- *Type:* java.lang.String

---

##### `explicitMaxTtlInput`<sup>Optional</sup> <a name="explicitMaxTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput"></a>

```java
public java.lang.String getExplicitMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noParentInput`<sup>Optional</sup> <a name="noParentInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput"></a>

```java
public java.lang.Boolean|IResolvable getNoParentInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput"></a>

```java
public java.lang.Number getNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput"></a>

```java
public java.lang.Boolean|IResolvable getRenewableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `wrappingTtlInput`<sup>Optional</sup> <a name="wrappingTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput"></a>

```java
public java.lang.String getWrappingTtlInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `entityAlias`<sup>Required</sup> <a name="entityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias"></a>

```java
public java.lang.String getEntityAlias();
```

- *Type:* java.lang.String

---

##### `explicitMaxTtl`<sup>Required</sup> <a name="explicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl"></a>

```java
public java.lang.String getExplicitMaxTtl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noParent`<sup>Required</sup> <a name="noParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent"></a>

```java
public java.lang.Boolean|IResolvable getNoParent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable"></a>

```java
public java.lang.Boolean|IResolvable getRenewable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `wrappingTtl`<sup>Required</sup> <a name="wrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTokenConfig <a name="EphemeralVaultTokenConfig" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_token.EphemeralVaultTokenConfig;

EphemeralVaultTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .displayName(java.lang.String)
//  .entityAlias(java.lang.String)
//  .explicitMaxTtl(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean|IResolvable)
//  .noParent(java.lang.Boolean|IResolvable)
//  .numUses(java.lang.Number)
//  .period(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .renewable(java.lang.Boolean|IResolvable)
//  .roleName(java.lang.String)
//  .ttl(java.lang.String)
//  .type(java.lang.String)
//  .wrappingTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias">entityAlias</a></code> | <code>java.lang.String</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent">noParent</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period">period</a></code> | <code>java.lang.String</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable">renewable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type">type</a></code> | <code>java.lang.String</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL period of the wrapped token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `entityAlias`<sup>Optional</sup> <a name="entityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias"></a>

```java
public java.lang.String getEntityAlias();
```

- *Type:* java.lang.String

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl"></a>

```java
public java.lang.String getExplicitMaxTtl();
```

- *Type:* java.lang.String

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent"></a>

```java
public java.lang.Boolean|IResolvable getNoParent();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable"></a>

```java
public java.lang.Boolean|IResolvable getRenewable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---



