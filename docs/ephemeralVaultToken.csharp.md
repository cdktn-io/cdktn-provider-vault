# `ephemeralVaultToken` Submodule <a name="`ephemeralVaultToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultToken <a name="EphemeralVaultToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultToken(Construct Scope, string Id, EphemeralVaultTokenConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig">EphemeralVaultTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias">ResetEntityAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl">ResetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy">ResetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent">ResetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses">ResetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable">ResetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl">ResetWrappingTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEntityAlias` <a name="ResetEntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetEntityAlias"></a>

```csharp
private void ResetEntityAlias()
```

##### `ResetExplicitMaxTtl` <a name="ResetExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetExplicitMaxTtl"></a>

```csharp
private void ResetExplicitMaxTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNoDefaultPolicy` <a name="ResetNoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoDefaultPolicy"></a>

```csharp
private void ResetNoDefaultPolicy()
```

##### `ResetNoParent` <a name="ResetNoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNoParent"></a>

```csharp
private void ResetNoParent()
```

##### `ResetNumUses` <a name="ResetNumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetNumUses"></a>

```csharp
private void ResetNumUses()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetRenewable` <a name="ResetRenewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRenewable"></a>

```csharp
private void ResetRenewable()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetWrappingTtl` <a name="ResetWrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.resetWrappingTtl"></a>

```csharp
private void ResetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan">Orphan</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies">TokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken">WrappedToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor">WrappingAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput">EntityAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput">ExplicitMaxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput">NoDefaultPolicyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput">NoParentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput">NumUsesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput">RenewableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput">WrappingTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias">EntityAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent">NoParent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses">NumUses</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable">Renewable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `Orphan`<sup>Required</sup> <a name="Orphan" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.orphan"></a>

```csharp
public IResolvable Orphan { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `TokenPolicies`<sup>Required</sup> <a name="TokenPolicies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tokenPolicies"></a>

```csharp
public string[] TokenPolicies { get; }
```

- *Type:* string[]

---

##### `WrappedToken`<sup>Required</sup> <a name="WrappedToken" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappedToken"></a>

```csharp
public string WrappedToken { get; }
```

- *Type:* string

---

##### `WrappingAccessor`<sup>Required</sup> <a name="WrappingAccessor" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingAccessor"></a>

```csharp
public string WrappingAccessor { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntityAliasInput`<sup>Optional</sup> <a name="EntityAliasInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAliasInput"></a>

```csharp
public string EntityAliasInput { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtlInput`<sup>Optional</sup> <a name="ExplicitMaxTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtlInput"></a>

```csharp
public string ExplicitMaxTtlInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NoDefaultPolicyInput`<sup>Optional</sup> <a name="NoDefaultPolicyInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicyInput"></a>

```csharp
public bool|IResolvable NoDefaultPolicyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NoParentInput`<sup>Optional</sup> <a name="NoParentInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParentInput"></a>

```csharp
public bool|IResolvable NoParentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumUsesInput`<sup>Optional</sup> <a name="NumUsesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUsesInput"></a>

```csharp
public double NumUsesInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `RenewableInput`<sup>Optional</sup> <a name="RenewableInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewableInput"></a>

```csharp
public bool|IResolvable RenewableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `WrappingTtlInput`<sup>Optional</sup> <a name="WrappingTtlInput" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtlInput"></a>

```csharp
public string WrappingTtlInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EntityAlias`<sup>Required</sup> <a name="EntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.entityAlias"></a>

```csharp
public string EntityAlias { get; }
```

- *Type:* string

---

##### `ExplicitMaxTtl`<sup>Required</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NoDefaultPolicy`<sup>Required</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noDefaultPolicy"></a>

```csharp
public bool|IResolvable NoDefaultPolicy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NoParent`<sup>Required</sup> <a name="NoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.noParent"></a>

```csharp
public bool|IResolvable NoParent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumUses`<sup>Required</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.numUses"></a>

```csharp
public double NumUses { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.renewable"></a>

```csharp
public bool|IResolvable Renewable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `WrappingTtl`<sup>Required</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultTokenConfig <a name="EphemeralVaultTokenConfig" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string DisplayName = null,
    string EntityAlias = null,
    string ExplicitMaxTtl = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MountId = null,
    string Namespace = null,
    bool|IResolvable NoDefaultPolicy = null,
    bool|IResolvable NoParent = null,
    double NumUses = null,
    string Period = null,
    string[] Policies = null,
    bool|IResolvable Renewable = null,
    string RoleName = null,
    string Ttl = null,
    string Type = null,
    string WrappingTtl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias">EntityAlias</a></code> | <code>string</code> | Name of the entity alias to associate with during token creation. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl">ExplicitMaxTtl</a></code> | <code>string</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id">Id</a></code> | <code>string</code> | The ID of the client token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy">NoDefaultPolicy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent">NoParent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses">NumUses</a></code> | <code>double</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period">Period</a></code> | <code>string</code> | The period of the token for periodic tokens. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies">Policies</a></code> | <code>string[]</code> | List of policies to attach to the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable">Renewable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName">RoleName</a></code> | <code>string</code> | The token role name. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL period of the token. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type">Type</a></code> | <code>string</code> | The token type. Can be 'batch' or 'service'. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl">WrappingTtl</a></code> | <code>string</code> | The TTL period of the wrapped token. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}

---

##### `EntityAlias`<sup>Optional</sup> <a name="EntityAlias" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.entityAlias"></a>

```csharp
public string EntityAlias { get; set; }
```

- *Type:* string

Name of the entity alias to associate with during token creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}

---

##### `ExplicitMaxTtl`<sup>Optional</sup> <a name="ExplicitMaxTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.explicitMaxTtl"></a>

```csharp
public string ExplicitMaxTtl { get; set; }
```

- *Type:* string

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the client token.

This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}

---

##### `NoDefaultPolicy`<sup>Optional</sup> <a name="NoDefaultPolicy" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noDefaultPolicy"></a>

```csharp
public bool|IResolvable NoDefaultPolicy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}

---

##### `NoParent`<sup>Optional</sup> <a name="NoParent" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.noParent"></a>

```csharp
public bool|IResolvable NoParent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}

---

##### `NumUses`<sup>Optional</sup> <a name="NumUses" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.numUses"></a>

```csharp
public double NumUses { get; set; }
```

- *Type:* double

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

The period of the token for periodic tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

List of policies to attach to the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}

---

##### `Renewable`<sup>Optional</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.renewable"></a>

```csharp
public bool|IResolvable Renewable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The token type. Can be 'batch' or 'service'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}

---

##### `WrappingTtl`<sup>Optional</sup> <a name="WrappingTtl" id="@cdktn/provider-vault.ephemeralVaultToken.EphemeralVaultTokenConfig.property.wrappingTtl"></a>

```csharp
public string WrappingTtl { get; set; }
```

- *Type:* string

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}

---



