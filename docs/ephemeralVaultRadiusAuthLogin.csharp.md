# `ephemeralVaultRadiusAuthLogin` Submodule <a name="`ephemeralVaultRadiusAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultRadiusAuthLogin <a name="EphemeralVaultRadiusAuthLogin" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login vault_radius_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultRadiusAuthLogin(Construct Scope, string Id, EphemeralVaultRadiusAuthLoginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig">EphemeralVaultRadiusAuthLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig">EphemeralVaultRadiusAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultRadiusAuthLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultRadiusAuthLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultRadiusAuthLogin.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data">Data</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies">IdentityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata">Metadata</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement">MfaRequirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan">Orphan</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable">Renewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings">Warnings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data"></a>

```csharp
public StringMap Data { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `IdentityPolicies`<sup>Required</sup> <a name="IdentityPolicies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies"></a>

```csharp
public string[] IdentityPolicies { get; }
```

- *Type:* string[]

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `MfaRequirement`<sup>Required</sup> <a name="MfaRequirement" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement"></a>

```csharp
public string MfaRequirement { get; }
```

- *Type:* string

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan"></a>

```csharp
public IResolvable Orphan { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `Warnings`<sup>Required</sup> <a name="Warnings" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings"></a>

```csharp
public string[] Warnings { get; }
```

- *Type:* string[]

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultRadiusAuthLoginConfig <a name="EphemeralVaultRadiusAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultRadiusAuthLoginConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string Password,
    string Username,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount">Mount</a></code> | <code>string</code> | Unique name of the auth backend to login to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password">Password</a></code> | <code>string</code> | RADIUS password for the user. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username">Username</a></code> | <code>string</code> | RADIUS username to authenticate. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Unique name of the auth backend to login to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login#mount EphemeralVaultRadiusAuthLogin#mount}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

RADIUS password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login#password EphemeralVaultRadiusAuthLogin#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

RADIUS username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login#username EphemeralVaultRadiusAuthLogin#username}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login#mount_id EphemeralVaultRadiusAuthLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/radius_auth_login#namespace EphemeralVaultRadiusAuthLogin#namespace}

---



