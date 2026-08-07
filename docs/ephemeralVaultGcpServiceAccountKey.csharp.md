# `ephemeralVaultGcpServiceAccountKey` Submodule <a name="`ephemeralVaultGcpServiceAccountKey` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpServiceAccountKey <a name="EphemeralVaultGcpServiceAccountKey" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key vault_gcp_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpServiceAccountKey(Construct Scope, string Id, EphemeralVaultGcpServiceAccountKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig">EphemeralVaultGcpServiceAccountKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm">ResetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset">ResetRoleset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount">ResetStaticAccount</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetKeyAlgorithm` <a name="ResetKeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyAlgorithm"></a>

```csharp
private void ResetKeyAlgorithm()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetRoleset` <a name="ResetRoleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetRoleset"></a>

```csharp
private void ResetRoleset()
```

##### `ResetStaticAccount` <a name="ResetStaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.resetStaticAccount"></a>

```csharp
private void ResetStaticAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpServiceAccountKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpServiceAccountKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGcpServiceAccountKey.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime">LeaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData">PrivateKeyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput">KeyAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput">RolesetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput">StaticAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset">Roleset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount">StaticAccount</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LeaseStartTime`<sup>Required</sup> <a name="LeaseStartTime" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.leaseStartTime"></a>

```csharp
public string LeaseStartTime { get; }
```

- *Type:* string

---

##### `PrivateKeyData`<sup>Required</sup> <a name="PrivateKeyData" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyData"></a>

```csharp
public string PrivateKeyData { get; }
```

- *Type:* string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `KeyAlgorithmInput`<sup>Optional</sup> <a name="KeyAlgorithmInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithmInput"></a>

```csharp
public string KeyAlgorithmInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RolesetInput`<sup>Optional</sup> <a name="RolesetInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.rolesetInput"></a>

```csharp
public string RolesetInput { get; }
```

- *Type:* string

---

##### `StaticAccountInput`<sup>Optional</sup> <a name="StaticAccountInput" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccountInput"></a>

```csharp
public string StaticAccountInput { get; }
```

- *Type:* string

---

##### `KeyAlgorithm`<sup>Required</sup> <a name="KeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Roleset`<sup>Required</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.roleset"></a>

```csharp
public string Roleset { get; }
```

- *Type:* string

---

##### `StaticAccount`<sup>Required</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.staticAccount"></a>

```csharp
public string StaticAccount { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpServiceAccountKeyConfig <a name="EphemeralVaultGcpServiceAccountKeyConfig" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGcpServiceAccountKeyConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string KeyAlgorithm = null,
    string KeyType = null,
    string MountId = null,
    string Namespace = null,
    string Roleset = null,
    string StaticAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the GCP Secret Backend to read credentials from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm">KeyAlgorithm</a></code> | <code>string</code> | Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType">KeyType</a></code> | <code>string</code> | Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset">Roleset</a></code> | <code>string</code> | GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount">StaticAccount</a></code> | <code>string</code> | GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the GCP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount EphemeralVaultGcpServiceAccountKey#mount}

---

##### `KeyAlgorithm`<sup>Optional</sup> <a name="KeyAlgorithm" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyAlgorithm"></a>

```csharp
public string KeyAlgorithm { get; set; }
```

- *Type:* string

Key algorithm used to generate key. Defaults to 2k RSA key. Accepted values: `KEY_ALG_UNSPECIFIED`, `KEY_ALG_RSA_1024`, `KEY_ALG_RSA_2048`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_algorithm EphemeralVaultGcpServiceAccountKey#key_algorithm}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Private key type to generate. Defaults to JSON credentials file. Accepted values: `TYPE_UNSPECIFIED`, `TYPE_PKCS12_FILE`, `TYPE_GOOGLE_CREDENTIALS_FILE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#key_type EphemeralVaultGcpServiceAccountKey#key_type}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#mount_id EphemeralVaultGcpServiceAccountKey#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#namespace EphemeralVaultGcpServiceAccountKey#namespace}

---

##### `Roleset`<sup>Optional</sup> <a name="Roleset" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.roleset"></a>

```csharp
public string Roleset { get; set; }
```

- *Type:* string

GCP Secret Roleset to generate credentials for. Mutually exclusive with `static_account`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#roleset EphemeralVaultGcpServiceAccountKey#roleset}

---

##### `StaticAccount`<sup>Optional</sup> <a name="StaticAccount" id="@cdktn/provider-vault.ephemeralVaultGcpServiceAccountKey.EphemeralVaultGcpServiceAccountKeyConfig.property.staticAccount"></a>

```csharp
public string StaticAccount { get; set; }
```

- *Type:* string

GCP Secret Static Account to generate credentials for. Mutually exclusive with `roleset`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/gcp_service_account_key#static_account EphemeralVaultGcpServiceAccountKey#static_account}

---



