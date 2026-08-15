# `ephemeralVaultKubernetesServiceAccountToken` Submodule <a name="`ephemeralVaultKubernetesServiceAccountToken` Submodule" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultKubernetesServiceAccountToken <a name="EphemeralVaultKubernetesServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultKubernetesServiceAccountToken(Construct Scope, string Id, EphemeralVaultKubernetesServiceAccountTokenConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig">EphemeralVaultKubernetesServiceAccountTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding">ResetClusterRoleBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetClusterRoleBinding` <a name="ResetClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```csharp
private void ResetClusterRoleBinding()
```

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKubernetesServiceAccountToken.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKubernetesServiceAccountToken.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultKubernetesServiceAccountToken.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId">LeaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable">LeaseRenewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName">ServiceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">ServiceAccountNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken">ServiceAccountToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput">BackendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">ClusterRoleBindingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend">Backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding">ClusterRoleBinding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `LeaseId`<sup>Required</sup> <a name="LeaseId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseId"></a>

```csharp
public string LeaseId { get; }
```

- *Type:* string

---

##### `LeaseRenewable`<sup>Required</sup> <a name="LeaseRenewable" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```csharp
public IResolvable LeaseRenewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```csharp
public string ServiceAccountName { get; }
```

- *Type:* string

---

##### `ServiceAccountNamespace`<sup>Required</sup> <a name="ServiceAccountNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```csharp
public string ServiceAccountNamespace { get; }
```

- *Type:* string

---

##### `ServiceAccountToken`<sup>Required</sup> <a name="ServiceAccountToken" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```csharp
public string ServiceAccountToken { get; }
```

- *Type:* string

---

##### `BackendInput`<sup>Optional</sup> <a name="BackendInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backendInput"></a>

```csharp
public string BackendInput { get; }
```

- *Type:* string

---

##### `ClusterRoleBindingInput`<sup>Optional</sup> <a name="ClusterRoleBindingInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```csharp
public bool|IResolvable ClusterRoleBindingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```csharp
public string KubernetesNamespaceInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.backend"></a>

```csharp
public string Backend { get; }
```

- *Type:* string

---

##### `ClusterRoleBinding`<sup>Required</sup> <a name="ClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```csharp
public bool|IResolvable ClusterRoleBinding { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultKubernetesServiceAccountTokenConfig <a name="EphemeralVaultKubernetesServiceAccountTokenConfig" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultKubernetesServiceAccountTokenConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Backend,
    string KubernetesNamespace,
    string Role,
    bool|IResolvable ClusterRoleBinding = null,
    string MountId = null,
    string Namespace = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend">Backend</a></code> | <code>string</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role">Role</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">ClusterRoleBinding</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Backend`<sup>Required</sup> <a name="Backend" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```csharp
public string Backend { get; set; }
```

- *Type:* string

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#backend EphemeralVaultKubernetesServiceAccountToken#backend}

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; set; }
```

- *Type:* string

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#kubernetes_namespace EphemeralVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#role EphemeralVaultKubernetesServiceAccountToken#role}

---

##### `ClusterRoleBinding`<sup>Optional</sup> <a name="ClusterRoleBinding" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```csharp
public bool|IResolvable ClusterRoleBinding { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#cluster_role_binding EphemeralVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#mount_id EphemeralVaultKubernetesServiceAccountToken#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#namespace EphemeralVaultKubernetesServiceAccountToken#namespace}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-vault.ephemeralVaultKubernetesServiceAccountToken.EphemeralVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/kubernetes_service_account_token#ttl EphemeralVaultKubernetesServiceAccountToken#ttl}

---



